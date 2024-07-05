import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { authorizeUser } from "../middlewares/authorizeUser";
import {
  createBlogInput,
  updateBlogInput,
} from "@rahuljat1349/common-schema";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", authorizeUser);

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      massage: "Inputs are not correct",
    });
  }
  const userId = c.get("userId");
  
  const date = new Date

 try {
     const blog = await prisma.post.create({
       data: {
         title: body.title,
         content: body.content,
         authorId: userId,
         date: date.toLocaleDateString(),
       },
       select: {
         author: {
           select: {
             name: true,
           },
         },
       },
     });

   return c.json({ blog });
 } catch (error) {
  c.status(411);
  return c.json({ error });
 }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = updateBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      massage: "Inputs are not correct",
    });
  }
  const userId = c.get("userId");

 try {
   const blog = await prisma.post.update({
     where: {
       id: body.id,
     },
     data: {
       title: body.title,
       content: body.content,
       authorId: userId,
     },
   });

   return c.json({ blog });
 } catch (error) {
  c.status(411);
  return c.json({ error });
 }
});

// Todo : add pagination
blogRouter.get("/all", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  
  

  try {
    const blogs = await prisma.post.findMany({
      select:{
        id: true,
        title:true,
        content:true,
        date:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });

    return c.json({ blogs });
  } catch (error) {
    c.status(411);
    return c.json({ error });
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");

 try {
   const blog = await prisma.post.findUnique({
     where: {
       id: id,
     },
   });

   return c.json({ blog });
 } catch (error) {
  c.status(411);
  return c.json({ error });
 }
});
