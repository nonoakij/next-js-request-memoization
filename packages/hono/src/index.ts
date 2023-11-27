import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ text: "Hello Hono!" });
});

export default app;
