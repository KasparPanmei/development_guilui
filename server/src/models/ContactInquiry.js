import mongoose from "mongoose";

const contactInquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  email: { type: String, required: true, lowercase: true, trim: true, maxlength: 254 },
  topic: { type: String, required: true, maxlength: 100 },
  message: { type: String, required: true, trim: true, maxlength: 4000 }
}, { timestamps: true, versionKey: false });

contactInquirySchema.index({ createdAt: -1 });
export default mongoose.model("ContactInquiry", contactInquirySchema);
