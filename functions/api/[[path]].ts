import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";
import { D1Storage } from "../../server/storage";
import { insertUserSchema } from "../../shared/schema";

type Bindings = {
  DB: D1Database;
};

type Variables = {
  storage: D1Storage;
};

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>().basePath("/api");

// Middleware to inject storage into context
app.use("*", async (c, next) => {
  const storage = new D1Storage(c.env.DB);
  c.set("storage", storage);
  await next();
});

// Auth Routes (Example/Placeholder based on package.json)
app.post("/register", async (c) => {
  const storage = c.get("storage") as D1Storage;
  const body = await c.req.json();
  const result = insertUserSchema.safeParse(body);

  if (!result.success) {
    return c.json({ message: "Invalid input", errors: result.error.errors }, 400);
  }

  const existing = await storage.getUserByUsername(result.data.username);
  if (existing) {
    return c.json({ message: "Username already exists" }, 400);
  }

  const user = await storage.createUser(result.data);
  return c.json(user, 201);
});

app.post("/login", async (c) => {
  const storage = c.get("storage") as D1Storage;
  const body = await c.req.json();
  const user = await storage.getUserByUsername(body.username);

  if (!user || user.password !== body.password) {
    return c.json({ message: "Invalid credentials" }, 401);
  }

  // Simplified: return user (real app would set cookie/JWT)
  return c.json(user);
});

app.get("/user", async (c) => {
  // Real app would check session/JWT
  return c.json({ message: "Not authenticated" }, 401);
});

// Example API route
app.get("/hello", (c) => {
  return c.json({ message: "Hello from Cloudflare Pages!" });
});

export const onRequest = handle(app);
