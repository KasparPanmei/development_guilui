import { Router } from "express";
import { z } from "zod";
import ContactInquiry from "../../models/ContactInquiry.js";

const router = Router();
const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  topic: z.string().trim().min(2).max(100),
  message: z.string().trim().min(10).max(4000)
}).strict();

router.post("/", async (req, res, next) => {
  try {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: "Please check the form fields." });
    await ContactInquiry.create(parsed.data);
    res.status(201).json({ success: true, message: "Inquiry received." });
  } catch (error) { next(error); }
});
export default router;
