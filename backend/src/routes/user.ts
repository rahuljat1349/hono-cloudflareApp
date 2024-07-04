import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@rahuljat1349/common-schema";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  
  
  const { success } = signupInput.safeParse(body);
  
  if (!success) {
    c.status(411);
    return c.json({
      massage: "Inputs are not correct",
    });
  }
  
  try {
    const user = await prisma.user.create({
      data: {
        name:body.name,
        email: body.email,
        password: body.password,
      },
    });
    console.log(body);
    const jwt = await sign({ id: user.id }, "secret");
    return c.json({ jwt });
  } catch (error) {
    c.status(411);
    return c.json({ error });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      massage: "Inputs are not correct",
    });
  }
  try {
    const user: any = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found!" });
    }

    if (user.password != body.password) {
      c.status(403);
      return c.json({ error: "wrong credentials!" });
    }

    const jwt = await sign({ id: user.id }, "secret");
    return c.json({ jwt, user });
  } catch (error) {
    c.status(411);
    return c.json({ error });
  }
});
