import { env } from "./config/env.js";
import { connectDatabase } from "./config/db.js";
import app from "./app.js";

await connectDatabase();
const server = app.listen(env.port, () => console.log(`GUILUI API listening on ${env.port}`));

async function shutdown(signal) {
  console.log(`${signal} received; shutting down`);
  server.close(async () => {
    const mongoose = await import("mongoose");
    await mongoose.default.connection.close();
    process.exit(0);
  });
}
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
