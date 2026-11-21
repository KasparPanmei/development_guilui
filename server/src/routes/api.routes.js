import { Router } from "express";
import contactRoutes from "../modules/contact/contact.routes.js";
import catalogueRoutes from "../modules/catalogue/catalogue.routes.js";

const router = Router();
router.get("/health", (req,res) => res.json({ success:true, service:"guilui-api", status:"ok" }));
router.use("/contact", contactRoutes);
router.use("/catalogue", catalogueRoutes);
export default router;
