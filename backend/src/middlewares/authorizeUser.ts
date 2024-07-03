import { verify } from "hono/jwt";

export const authorizeUser = async (c: any, next: any) => {
  const jwt = c.req.header("authorization") || "";

  try {
    if (!jwt) {
      c.status(401);
      return c.json({
        error: "unauthorized",
      });
    }

    const token = jwt.split(" ")[1];
    const payload = await verify(token, "secret");

    if (!payload) {
      c.status(401);
      return c.json({
        error: "unauthorized",
      });
    }
    c.set("userId", payload.id);
  } catch (error) {
    return c.json({ massage: "you are not logged in" });
  }
  await next();
};
