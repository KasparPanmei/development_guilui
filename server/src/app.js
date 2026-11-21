import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import session from "express-session";
import MongoStore from "connect-mongo";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import apiRoutes from "./routes/api.routes.js";
import { errorHandler, notFound } from "./middleware/errors.js";

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({ origin: env.clientOrigin, credentials: true }));
app.use(compression());
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: false, limit: "20kb" }));
app.use(mongoSanitize());
app.use(session({
  name: "guilui.sid",
  secret: env.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: env.mongoUri, collectionName: "sessions", ttl: 60 * 60 * 24 * 7 }),
  cookie: { httpOnly: true, secure: env.nodeEnv === "production", sameSite: "lax", maxAge: 7 * 24 * 60 * 60 * 1000 }
}));
app.use("/api", rateLimit({ windowMs: 15 * 60 * 1000, limit: 180, standardHeaders: "draft-7", legacyHeaders: false }));
app.use("/api/v1/contact", rateLimit({ windowMs: 60 * 60 * 1000, limit: 5, standardHeaders: "draft-7", legacyHeaders: false }));
app.use("/api/v1", apiRoutes);
app.use(notFound);
app.use(errorHandler);
export default app;
