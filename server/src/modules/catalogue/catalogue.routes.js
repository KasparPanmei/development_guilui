import { Router } from "express";
const router = Router();
const packages = [
  { tier:"Entry", prices:{ cohort1:1999, cohort2:2499, standard:4999, referral:3999 }, includes:["Social Skills — Core","Confidence — Core","Communication Skills — Core","3 mandatory break practicals","Optional bonus practical","Entry Certificate","Community access","Free affiliate training and affiliate access"] },
  { tier:"Pro", prices:{ cohort1:3999, cohort2:4999, standard:8999, referral:6999 }, includes:["Everything in Entry","Advanced Social Skills","Advanced Confidence","Advanced Communication","Modern Dating Life","Pro Certificate","Core PDFs"] },
  { tier:"Elite", prices:{ cohort1:5999, cohort2:7499, standard:12999, referral:9999 }, includes:["Everything in Pro","Social Media Personal Branding","Elite Certificate","Elite Exclusive PDFs","One-time live webinar with Guilui"] }
];
const commissionRates = [
  { affiliateTier:"Entry", entry:52, pro:44, elite:31 },
  { affiliateTier:"Pro", entry:52, pro:50, elite:42 },
  { affiliateTier:"Elite", entry:52, pro:60, elite:62 }
];
router.get("/packages", (req,res) => res.json({ success:true, currency:"INR", activePhase:["cohort1","cohort2","standard"].includes(process.env.PRICING_PHASE) ? process.env.PRICING_PHASE : null, phaseLabels:{cohort1:"Cohort 1 · Founding Students",cohort2:"Cohort 2",standard:"Evergreen · Standard",referral:"Evergreen · Affiliate referral"}, packages }));
router.get("/affiliate-rates", (req,res) => res.json({ success:true, basis:"Gross referral price, inclusive of GST", rates:commissionRates, payoutDays:15, tdsPercent:2, attribution:"Lifetime" }));
router.get("/prime", (req,res) => res.json({ success:true, launchPhase:"Cohort 2", monthlyPrice:1200, includesGst:true, autoRenew:true }));
export default router;
