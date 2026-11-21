import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
  Clock3,
  Users,
  BookOpen,
  BadgeCheck,
  Copy,
  Mail,
  Instagram,
  Youtube,
} from "lucide-react";
import { Eyebrow, CTA } from "../components/Primitives";

// const packages = [
//   {
//     tier: "Entry",
//     includes: [
//       "Social Skills — Core",
//       "Confidence — Core",
//       "Communication Skills — Core",
//       "3 mandatory break practicals",
//       "Optional bonus practical",
//       "Entry Certificate",
//       "Private community access",
//       "Free affiliate training and affiliate access",
//     ],
//   },
//   {
//     tier: "Pro",
//     includes: [
//       "Everything in Entry",
//       "Advanced Social Skills",
//       "Advanced Confidence",
//       "Advanced Communication",
//       "Modern Dating Life",
//       "Pro Certificate",
//       "Core PDFs",
//     ],
//   },
//   {
//     tier: "Elite",
//     includes: [
//       "Everything in Pro",
//       "Social Media Personal Branding",
//       "Elite Certificate",
//       "Elite Exclusive PDFs",
//       "One-time live webinar with Guilui",
//     ],
//   },
// ];
const fmt = (n) => `₹${Number(n).toLocaleString("en-IN")}`;
// const courseSessions = [
//   {
//     n: "01",
//     title: "Session 01",
//     duration: "90 minutes",
//     body: "Build the foundation for social confidence and understand the behaviours that shape the way you connect.",
//   },
//   {
//     n: "02",
//     title: "Session 02",
//     duration: "90 minutes",
//     body: "Develop practical social skills and learn to communicate with greater intention.",
//   },
//   {
//     n: "03",
//     title: "Session 03",
//     duration: "90 minutes",
//     body: "Strengthen confidence through the ideas and exercises taught in the session.",
//   },
//   {
//     n: "04",
//     title: "Session 04",
//     duration: "90 minutes",
//     body: "Bring the learning together and prepare to apply it beyond the course.",
//   },
// ];
// const faq = [
//   [
//     "Is Course 101 a drip course?",
//     "No. It is an intensive with four 90-minute video sessions, three 30-minute breaks and a total Day 1 schedule of 7.5 hours.",
//   ],
//   [
//     "Are the practicals mandatory?",
//     "Three break practicals are mandatory. Each is tied to the session just completed and uses an honest self-declaration checkbox. One additional bonus practical is optional.",
//   ],
//   [
//     "When do certificate and affiliate access unlock?",
//     "They unlock together 30 minutes after Session 4 is completed and all three mandatory practical checkboxes are ticked, subject to the other eligibility requirements.",
//   ],
//   [
//     "Do all packages include affiliate training?",
//     "Yes. Affiliate training is free for every buyer, regardless of package tier. Affiliate access itself unlocks only after the eligibility conditions are met.",
//   ],
//   [
//     "Can I upgrade during Cohort 1 or Cohort 2?",
//     "No. Upgrades are available only in the Evergreen phase.",
//   ],
// ];

function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="public-hero">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{lead}</p>
      {children}
    </section>
  );
}
function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`public-section ${className}`}>
      <div className="public-section-heading">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
// function PackageCards({ showPrices = false }) {
//   const [catalogue, setCatalogue] = useState(null);
//   // useEffect(() => {
//   //   if (!showPrices) return;
//   //   fetch(
//   //     `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/v1/catalogue/packages`,
//   //   )
//   //     .then((r) => {
//   //       if (!r.ok) throw new Error("catalogue unavailable");
//   //       return r.json();
//   //     })
//   //     .then(setCatalogue)
//   //     .catch(() => setCatalogue({ success: false }));
//   // }, [showPrices]);
//   const phase = catalogue?.activePhase;
//   const labels = catalogue?.phaseLabels || {};
//   return (
//     <Reveal as="div" className="public-package-grid">
//       {packages.map((p, i) => {
//         const serverPackage = catalogue?.packages?.find(
//           (item) => item.tier === p.tier,
//         );
//         const prices = serverPackage?.prices;
//         return (
//           <article
//             className={`public-package-card ${i === 2 ? "is-elite" : ""}`}
//             key={p.tier}
//           >
//             <div className="package-card-top">
//               <span className="package-kicker">
//                 {["FOUNDATION", "ASCENT", "PINNACLE"][i]}
//               </span>
//               <h3>{p.tier}</h3>
//             </div>
//             {showPrices && (
//               <div className="package-price">
//                 {phase && prices?.[phase] ? (
//                   <>
//                     <span>{labels[phase] || phase}</span>
//                     <strong>{fmt(prices[phase])}</strong>
//                     <small>
//                       {phase === "standard"
//                         ? `Affiliate referral: ${fmt(prices.referral)} through an affiliate link`
//                         : `After the cohorts: ${fmt(prices.standard)} standard · ${fmt(prices.referral)} through an affiliate link`}
//                     </small>
//                   </>
//                 ) : prices ? (
//                   <>
//                     <span>Published price schedule</span>
//                     <strong>
//                       {fmt(prices.cohort1)} – {fmt(prices.cohort2)}
//                     </strong>
//                     <small>
//                       Cohort 1 · Cohort 2 · Evergreen standard{" "}
//                       {fmt(prices.standard)} · Affiliate referral{" "}
//                       {fmt(prices.referral)}. Active phase is not configured.
//                     </small>
//                   </>
//                 ) : (
//                   <>
//                     <span>Pricing currently unavailable</span>
//                     <strong>Contact the team</strong>
//                     <small>
//                       Current price and phase must be confirmed before checkout.
//                     </small>
//                   </>
//                 )}
//               </div>
//             )}
//             <ul>
//               {p.includes.map((x) => (
//                 <li key={x}>
//                   <Check size={15} />
//                   {x}
//                 </li>
//               ))}
//             </ul>
//             <Link
//               className="button button-gold package-cta"
//               to={showPrices ? "/contact" : "/packages"}
//             >
//               {showPrices ? "Ask about availability" : "Explore package"}
//               <ArrowRight size={16} />
//             </Link>
//           </article>
//         );
//       })}
//     </Reveal>
//   );
// }
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {faq.map(([q, a], i) => (
        <article className="faq-item" key={q}>
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{q}</span>
            <ChevronDown className={open === i ? "rotated" : ""} size={18} />
          </button>
          {open === i && <p>{a}</p>}
        </article>
      ))}
    </div>
  );
}

export function PackagesPage() {
  return (
    <main className="public-page">
      <div className="container">
        <PageHero
          eyebrow="THE Course EXPERIENCE"
          title={
            <>
              Choose your level of <em>commitment.</em>
            </>
          }
          lead="Every package begins with the same six-hour Course 101 intensive. Choose the depth of learning and resources that fits your next chapter."
        />
        <PackageCards showPrices />
        <p className="pricing-integrity">
          No coupons. No flash sales. The only lower price is through an
          affiliate link.
        </p>
        <div className="founding-note">
          <BadgeCheck />
          <div>
            <strong>Founding Student recognition</strong>
            <p>
              Every Cohort 1 buyer receives a permanent Founding Student badge.
            </p>
          </div>
        </div>
        <Reveal as="section" eyebrow="AT A GLANCE" title="Compare what is included">
          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Included</th>
                  <th>Entry</th>
                  <th>Pro</th>
                  <th>Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Social Skills — Core", 1, 1, 1],
                  ["Confidence — Core", 1, 1, 1],
                  ["Communication Skills — Core", 1, 1, 1],
                  ["3 mandatory practicals", 1, 1, 1],
                  ["Optional bonus practical", 1, 1, 1],
                  ["Entry Certificate", 1, 1, 1],
                  ["Community access", 1, 1, 1],
                  ["Free affiliate training", 1, 1, 1],
                  ["Advanced Social Skills", 0, 1, 1],
                  ["Advanced Confidence", 0, 1, 1],
                  ["Advanced Communication", 0, 1, 1],
                  ["Modern Dating Life", 0, 1, 1],
                  ["Pro Certificate", 0, 1, 1],
                  ["Core PDFs", 0, 1, 1],
                  ["Social Media Personal Branding", 0, 0, 1],
                  ["Elite Certificate", 0, 0, 1],
                  ["Elite Exclusive PDFs", 0, 0, 1],
                  ["One-time live webinar with Guilui", 0, 0, 1],
                ].map(([label, ...vals]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    {vals.map((v, i) => (
                      <td key={i}>
                        {v ? (
                          <Check className="included" size={17} />
                        ) : (
                          <span className="not-included">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        {/* <Reveal as="section" eyebrow="EVERGREEN ONLY" title="Upgrade when you're ready">
          <p className="section-lead">
            Upgrades are not available during Cohort 1 or Cohort 2. In the
            Evergreen phase, you pay only the difference and are never charged
            again for content you already have.
          </p>
          <div className="upgrade-grid">
            {[
              ["Entry → Pro", "₹3,000"],
              ["Entry → Elite", "₹6,000"],
              ["Pro → Elite", "₹3,000"],
            ].map(([a, b]) => (
              <div className="upgrade-card" key={a}>
                <span>{a}</span>
                <strong>{b}</strong>
              </div>
            ))}
          </div>
        </Reveal> */}
        {/* <div className="center-action">
          <CTA to="/courses/alter-ego-101">Explore Course 101</CTA>
        </div> */}
      </div>
    </main>
  );
}

export function AboutPage() {
  return (
    <main className="public-page">
      <div className="container">
        <PageHero
          eyebrow="THE PERSON BEHIND THE PURPOSE"
          title={
            <>
              From Tamenglong to <em>Beyond Limits.</em>
            </>
          }
          lead="I started with an Android phone and a dream. What began in 2019 became a journey built on consistency, community and the belief that where you come from does not decide where you can go."
        />
        <div className="about-feature">
          <div className="about-photo">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbWzJCg51LFdQFmfVC5i-lPzW2LxKvq0B_V0HPpMNZk9L7jAIz4TcviaNKmODy9Eqnc6YP_XUJkLLHO4kAr3MPIQOFAWiMDW5TtWvHAjNA0oijkJveEx-o2AK8DiXW4e4kM_yetrMLvHfUrt8v59ZmM8IRc4_AqxT5NX0LytF9xoID7Tsnfoph993xRW2mMEzKuiOHF2ViO38nlnxZvBSfJWVtBFtjxW4GJMR1ig3MxTy1HLWC__3Q"
              alt="Guiluiyang Panmei"
            />
          </div>
          <div className="about-copy">
            <Eyebrow>MY STORY</Eyebrow>
            <h2>
              Guiluiyang Panmei.
              <br />
              <em>Guilui Panmei.</em>
            </h2>
            <p>
              I began creating in 2019 in Tamenglong, Manipur, with an Android
              phone and a dream. There was no elaborate setup and no guarantee
              that anyone would listen. I kept showing up.
            </p>
            <p>
              Today, I have over 1 lakh YouTube subscribers and became the first
              person from the Rongmei Naga community to receive the YouTube
              Silver Play Button.
            </p>
            <p>
              That milestone means more than a number. It represents what
              becomes possible when you refuse to let your starting point define
              your destination.
            </p>
            <p>
              GUILUI PANMEI is the next expression of that belief: a place to
              learn, practise and grow — built by me, for you, for society.
            </p>
            <p className="signature">Beyond Limits.</p>
          </div>
        </div>
        <Section
          eyebrow="WHAT GUIDES THIS WORK"
          title="Principles before promises"
        >
          <div className="principle-grid">
            {[
              [
                "Be the Proof",
                "The work should be visible in how we live, learn and show up.",
              ],
              [
                "Transformation First",
                "The course is the product. Everything else supports it.",
              ],
              [
                "Community Over Marketplace",
                "A private community of buyers, built around shared progress.",
              ],
              // [
              //   "Single-Level Integrity",
              //   "Affiliates earn from their own direct sales. No downlines. No MLM.",
              // ],
            ].map(([t, d], i) => (
              <article className="principle-card" key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}

export function CoursesPage() {
  return (
    <main className="public-page">
      <div className="container">
        <PageHero
          eyebrow="LEARN · PRACTISE · TRANSFORM"
          title={
            <>
              A different way to <em>show up.</em>
            </>
          }
          lead="Course 101 is a six-hour intensive focused on social skills, confidence and communication. It is designed around learning and practical application — not passive watching."
        />
        <div className="course-overview-band">
          <div>
            <span className="course-overline">FLAGSHIP COURSE</span>
            <h2>Course 101</h2>
            <p>
              4 sessions · 90 minutes each · 3 practical breaks · 7.5 hours
              total on Day 1
            </p>
          </div>
          <CTA to="/courses/alter-ego-101">Explore the course</CTA>
        </div>
        <Section
          eyebrow="THE FORMAT"
          title="Four sessions. Three practical breaks."
        >
          <div className="session-grid">
            {courseSessions.map((s) => (
              <article className="session-card" key={s.n}>
                <span>{s.n}</span>
                <h3>{s.title}</h3>
                <small>{s.duration}</small>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <div className="break-explainer">
            <Clock3 />
            <div>
              <strong>Three 30-minute breaks</strong>
              <p>
                One mandatory practical is completed in each break, tied to the
                session just finished. A bonus practical is optional and unlocks
                30 minutes after Session 4.
              </p>
            </div>
          </div>
        </Section>
        <Section
          eyebrow="THE LEARNING PATH"
          title="What happens after the final session?"
        >
          <div className="unlock-steps">
            <div>
              <strong>01 · Complete</strong>
              <p>Finish all four video sessions.</p>
            </div>
            <div>
              <strong>02 · Practise</strong>
              <p>
                Tick all three mandatory practicals with an honest
                self-declaration.
              </p>
            </div>
            <div>
              <strong>03 · Unlock</strong>
              <p>
                Thirty minutes after Session 4 and all practicals are complete,
                certificate and affiliate access unlock together, subject to
                eligibility.
              </p>
            </div>
          </div>
        </Section>
        <Section eyebrow="COMMON QUESTIONS" title="Before you begin">
          <FAQ />
        </Section>
        <div className="center-action">
          <CTA to="/packages">Compare packages</CTA>
        </div>
      </div>
    </main>
  );
}

export function CourseDetailPage() {
  return (
    <main className="public-page">
      <div className="container">
        <PageHero
          eyebrow="THE FLAGSHIP EXPERIENCE · 6 HOURS OF VIDEO"
          title={
            <>
              Course <em>101.</em>
            </>
          }
          lead="A six-hour intensive on social skills, confidence and communication. Not just what to say — how to show up, connect and apply what you learn."
        />
        <div className="course-metrics">
          <div>
            <strong>6 hours</strong>
            <span>Video learning</span>
          </div>
          <div>
            <strong>4 sessions</strong>
            <span>90 minutes each</span>
          </div>
          <div>
            <strong>3 practicals</strong>
            <span>Mandatory break work</span>
          </div>
          <div>
            <strong>7.5 hours</strong>
            <span>Total Day 1 schedule</span>
          </div>
        </div>
        <Section
          eyebrow="COURSE STRUCTURE"
          title="Learn it. Put it into practice."
        >
          <div className="session-grid">
            {courseSessions.map((s) => (
              <article className="session-card" key={s.n}>
                <span>{s.n}</span>
                <h3>{s.title}</h3>
                <small>{s.duration}</small>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p className="section-lead">
            The course is an intensive, not a drip course. Three 30-minute
            breaks separate the four sessions. Each break contains one mandatory
            practical tied to the session just completed.
          </p>
        </Section>
        <Section eyebrow="WHAT YOU CAN ACCESS" title="Choose your package">
          <PackageCards />
        </Section>
        <Section
          eyebrow="IMPORTANT DETAILS"
          title="Access, completion and protection"
        >
          <div className="detail-list">
            <p>
              <ShieldCheck /> Videos are delivered through a domain-locked Vimeo
              player with a faint dynamic watermark of the student's name.
            </p>
            <p>
              <ShieldCheck /> PDFs are watermarked with the student's name and
              email.
            </p>
            <p>
              <BadgeCheck /> Certificate and affiliate access unlock together 30
              minutes after Session 4 and completion of all three mandatory
              practicals, with verified phone and age eligibility.
            </p>
            <p>
              <Users /> Community access is for course buyers across all tiers.
            </p>
          </div>
        </Section>
        <div className="center-action">
          <CTA to="/packages">Choose your package</CTA>
        </div>
      </div>
    </main>
  );
}

export function AffiliatesPage() {
  const [rates, setRates] = useState(null);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/v1/catalogue/affiliate-rates`,
    )
      .then((r) => r.json())
      .then(setRates)
      .catch(() => setRates(null));
  }, []);
  return (
    <main className="public-page">
      <div className="container">
        <PageHero
          eyebrow="SINGLE LEVEL · NOT MLM"
          title={
            <>
              Be the <em>Proof.</em>
            </>
          }
          lead="Share what changed you. Earn from your own direct sales. No downlines, no recruitment quotas and no multi-level commissions."
        />
        <div className="affiliate-principle">
          <ShieldCheck />
          <div>
            <strong>Single-level integrity.</strong>
            <p>
              You earn only from your own verified sales. You never earn from
              another affiliate's activity.
            </p>
          </div>
        </div>
        <Section
          eyebrow="ELIGIBILITY"
          title="Learn first. Share when you're ready."
        >
          <div className="eligibility-grid">
            {[
              "Buy any Course 101 tier",
              "Complete all 6 hours of video",
              "Complete all 3 mandatory practicals",
              "Wait 30 minutes after Session 4",
              "Verify your phone number",
              "Confirm you are at least 18 years old",
            ].map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                {x}
              </div>
            ))}
          </div>
          <p className="section-lead">
            Affiliate training is free for every buyer, whatever their tier. It
            unlocks together with affiliate access once eligibility is met.
          </p>
        </Section>
        <Section
          eyebrow="COMMISSION STRUCTURE"
          title="Your tier sets your direct-sale rate."
        >
          <p className="section-lead">
            Commission is calculated on the gross referral price, inclusive of
            GST. Rates are served by the public catalogue API.
          </p>
          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Affiliate tier</th>
                  <th>Entry sale</th>
                  <th>Pro sale</th>
                  <th>Elite sale</th>
                </tr>
              </thead>
              <tbody>
                {(rates?.rates || []).map((r) => (
                  <tr key={r.affiliateTier}>
                    <td>{r.affiliateTier}</td>
                    <td>{r.entry}%</td>
                    <td>{r.pro}%</td>
                    <td>{r.elite}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!rates?.rates?.length && (
            <p className="section-lead">
              Commission rate catalogue is unavailable. Please contact the team
              for current details.
            </p>
          )}
          <p className="mandatory-disclaimer">
            Earnings shown are illustrative based on commission structure.
            Actual earnings depend entirely on individual effort, audience size,
            and sales made. No income is guaranteed.
          </p>
        </Section>
        <Section eyebrow="PROGRAM RULES" title="Clear rules. No shortcuts.">
          <div className="rules-grid">
            {[
              [
                "Attribution",
                "Lifetime attribution: permanent per customer, never expires.",
              ],
              ["Payout window", "15 days after the confirmed sale date."],
              ["TDS", "2% under Section 194H, deducted before payout."],
              [
                "Refunded sales",
                "Commission is voided; clawed back from the next payout if already paid.",
              ],
              [
                "Self-referrals",
                "Blocked. One verified phone number per affiliate account.",
              ],
              [
                "GST",
                "Affiliates earning above ₹20 lakh are responsible for their own GST registration.",
              ],
            ].map(([t, d]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </Section>
        <Section eyebrow="PROMOTE RESPONSIBLY" title="Trust is the foundation.">
          <p className="section-lead">
            Prohibited conduct includes self-referral, spam or unsolicited
            broadcasts, false income claims, pressure selling, multiple accounts
            and misleading claims not supported by official materials. An income
            disclaimer is mandatory wherever earnings appear.
          </p>
        </Section>
        <div className="center-action">
          <CTA to="/courses/alter-ego-101">Explore Course 101</CTA>
        </div>
      </div>
    </main>
  );
}

export function PrimePage() {
  const [prime, setPrime] = useState(null);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/v1/catalogue/prime`,
    )
      .then((r) => r.json())
      .then(setPrime)
      .catch(() => setPrime(null));
  }, []);
  return (
    <main className="public-page">
      <div className="container">
        <PageHero
          eyebrow="PRIME MEMBERSHIP · COHORT 2 LAUNCH"
          title={
            <>
              Stay close to the <em>work.</em>
            </>
          }
          lead="A monthly membership for continued learning, live conversations and a closer community around the Course experience."
        />
        <div className="prime-price">
          <span>Monthly membership · inclusive of 18% GST</span>
          <strong>
            {prime?.monthlyPrice
              ? fmt(prime.monthlyPrice)
              : "Price to be confirmed"}{" "}
            <small>{prime?.monthlyPrice ? "/ month" : ""}</small>
          </strong>
          <p>Monthly auto-renewal · launches with Cohort 2</p>
        </div>
        <Section eyebrow="MEMBERSHIP" title="What Prime includes">
          <div className="principle-grid">
            {[
              [
                "Monthly live webinar",
                "Hosted personally by Guilui for Prime members. Rotating topics include confidence, relationships, affiliate strategy and personal branding.",
              ],
              [
                "7-day recordings",
                "Webinar recordings remain available to Prime members for seven days, then are removed.",
              ],
              ["Monthly lucky draw", "One entry per verified phone number."],
              [
                "Prime affiliate bonus",
                "An additional 10% commission on up to five sales per month while Prime is active. The bonus freezes immediately on cancellation.",
              ],
              [
                "Prime referral reward",
                "₹500 per referred Prime member, released after they complete 30 days. Maximum 10 rewards per affiliate per month.",
              ],
            ].map(([t, d], i) => (
              <article className="principle-card" key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </Section>
        <p className="section-lead">
          Prime availability is tied to the Cohort 2 launch. Membership status,
          billing and rewards must be confirmed by the platform.
        </p>
        <div className="center-action">
          <CTA to="/contact">Ask about Prime</CTA>
        </div>
      </div>
    </main>
  );
}

const legalContent = {
  "/legal/refund-policy": [
    "Refund Policy",
    "24-hour refund window",
    "You may request a refund within 24 hours from the time of purchase. The same 24-hour window applies to upgrades, counted from the upgrade payment.",
    ["Refund window", "24 hours from purchase."],
    [
      "Deductions",
      "Payment-gateway fee (about 2% of the order value plus 18% GST on that fee) and a ₹6 flat processing fee.",
    ],
    ["Content access", "Refunds are given regardless of content accessed."],
    ["Processing", "5–10 business days, back to the original payment method."],
    [
      "Repeat abuse",
      "Repeat abusers may have their account permanently suspended.",
    ],
  ],
  "/legal/pricing-policy": [
    "Pricing Policy",
    "Transparent package pricing",
    "Packages are Entry, Pro and Elite. Cohort pricing and standard/referral prices are distinct programme phases. The lower referral price is accessed through an affiliate link; there are no coupons or flash sales.",
    ["Cohort 1", "Entry ₹1,999 · Pro ₹3,999 · Elite ₹5,999."],
    ["Cohort 2", "Entry ₹2,499 · Pro ₹4,999 · Elite ₹7,499."],
    ["Standard direct price", "Entry ₹4,999 · Pro ₹8,999 · Elite ₹12,999."],
    ["Affiliate referral price", "Entry ₹3,999 · Pro ₹6,999 · Elite ₹9,999."],
    [
      "Evergreen upgrades",
      "Entry to Pro ₹3,000 · Entry to Elite ₹6,000 · Pro to Elite ₹3,000. Upgrades are not available during either cohort.",
    ],
  ],
  "/legal/affiliate-terms": [
    "Affiliate Terms",
    "A single-level programme",
    "Affiliates earn only from their own direct sales. There are no downlines, recruitment quotas or multi-level commissions.",
    [
      "Eligibility",
      "Purchase any tier, complete all six video hours and three mandatory practicals, wait 30 minutes after Session 4, verify phone and confirm age 18+.",
    ],
    ["Attribution", "Lifetime attribution, permanent per customer."],
    ["Payout", "15 days after confirmed sale; 2% TDS under Section 194H."],
    [
      "Refunded sales",
      "Commission is voided and may be clawed back from the next payout if already paid.",
    ],
    [
      "Prohibited conduct",
      "Self-referral, spam, false income claims, pressure selling, multiple accounts and misleading claims are prohibited.",
    ],
  ],
  "/legal/terms-and-conditions": [
    "Terms & Conditions",
    "Using this platform",
    "This page is a structured draft based on the supplied product brief. It is not final legal advice and must be reviewed and approved by qualified counsel before publication.",
    [
      "Account",
      "One account identity is used for student access and eligible affiliate features.",
    ],
    [
      "Course access",
      "Course access is governed by purchased package entitlements and verified payment status.",
    ],
    [
      "Completion",
      "Certificates and affiliate access are issued only after server-verified completion and eligibility.",
    ],
    [
      "Payments",
      "Payment state is confirmed through verified payment-provider events, not browser redirects.",
    ],
  ],
  "/legal/dpdp-compliance": [
    "DPDP Compliance",
    "Personal data protection",
    "This page is a draft and must be aligned with the actual data processing map, processors, retention periods, security controls, user-rights workflow and applicable legal review before publication.",
    [
      "Data inventory",
      "Document the personal data collected, its source, purpose and lawful basis before launch.",
    ],
    [
      "Data processors",
      "List the hosting, email, analytics, payment and communications providers actually used by the live service.",
    ],
    [
      "Retention and deletion",
      "Publish verified retention periods and the process for access, correction, erasure and grievance requests.",
    ],
    [
      "Security",
      "Describe implemented safeguards accurately; do not claim certifications or controls that have not been independently verified.",
    ],
    ["Contact", "For privacy questions, contact hello@guiluipanmei.com."],
  ],
  "/legal/privacy-policy": [
    "Privacy Policy",
    "Respect for your personal information",
    "This page is a draft. Final publication requires confirmation of actual processors, storage locations, retention periods and legal basis for processing.",
    [
      "Account information",
      "The platform may process name, email address, verified phone number and account preferences.",
    ],
    [
      "Learning data",
      "Course progress, practical declarations, certificate status and package entitlements are used to provide the learning service.",
    ],
    [
      "Payment data",
      "Payment processing is handled by the selected payment provider. Do not store full card credentials in this platform.",
    ],
    ["Contact", "For privacy questions, contact hello@guiluipanmei.com."],
  ],
};
export function LegalPage({ path }) {
  const data =
    legalContent[path] || legalContent["/legal/terms-and-conditions"];
  return (
    <main className="public-page">
      <div className="container legal-layout">
        <aside className="legal-toc">
          <span>ON THIS PAGE</span>
          {data.slice(3).map(([t]) => (
            <a href={`#${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={t}>
              {t}
            </a>
          ))}
          <a href="mailto:hello@guiluipanmei.com">Contact support</a>
        </aside>
        <article className="legal-article">
          <Eyebrow>GUILUI PANMEI · LEGAL</Eyebrow>
          <h1>{data[0]}</h1>
          <h2>{data[1]}</h2>
          <p>{data[2]}</p>
          {data.slice(3).map(([t, d]) => (
            <section id={t.toLowerCase().replace(/[^a-z0-9]+/g, "-")} key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </section>
          ))}
          <p className="legal-draft-note">
            Draft content based on the supplied project brief. Review and
            approval are required before production publication.
          </p>
          <p>
            Questions?{" "}
            <a href="mailto:hello@guiluipanmei.com">hello@guiluipanmei.com</a>
          </p>
        </article>
      </div>
    </main>
  );
}

export function ContactPage() {
  const options = [
    // "Course & package enquiry",
    "Payment or checkout issue",
    "Refund request (within 24 hours)",
    "Login or account access",
    // "Course or video access",
    // "Certificate",
    // "Affiliate program",
    // "Affiliate payout or TDS",
    // "Prime membership",
    "Collaboration or media",
    "Something else",
  ];
  const [topic, setTopic] = useState(options[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const templates = {
    // "Course & package enquiry": [
    //   "Enquiry: Course 101 packages",
    //   "I'd like to know more about the Entry / Pro / Elite packages. My question: …\nName: …\nPhone (optional): …",
    // ],
    "Payment or checkout issue": [
      "Payment issue — Order [Order ID]",
      "I had a problem while paying. What happened: …\nName: …\nRegistered email: …\nOrder ID: …\nPayment method: …\nDate & time: …",
    ],
    "Refund request (within 24 hours)": [
      "Refund request — Order [Order ID]",
      "I'd like a refund for my purchase.\nName: …\nRegistered email: …\nOrder ID: …\nPurchase date & time: …\nReason (optional): …",
    ],
    "Login or account access": [
      "Account access issue",
      "I can't access my account. What happens: …\nName: …\nRegistered email: …\nPhone: …",
    ],
    // "Course or video access": [
    //   "Course access issue — [Session]",
    //   "I'm having trouble with the course. Session: …\nProblem: …\nDevice/browser: …\nName: …\nRegistered email: …",
    // ],
    // Certificate: [
    //   "Certificate query — [Certificate ID]",
    //   "Question about my certificate: …\nName: …\nCertificate ID: …",
    // ],
    // "Affiliate program": [
    //   "Affiliate program query",
    //   "Question about the affiliate program: …\nName: …\nRegistered email: …",
    // ],
    // "Affiliate payout or TDS": [
    //   "Affiliate payout / TDS query — [Month]",
    //   "Question about my payout / TDS: …\nName: …\nAffiliate email: …\nPayout month: …",
    // ],
    // "Prime membership": [
    //   "Prime membership query",
    //   "Question about Prime: …\nName: …\nRegistered email: …",
    // ],
    "Collaboration or media": [
      "Collaboration / media enquiry",
      "I'd like to collaborate / feature Guilui. Details: …\nName: …\nOrganisation: …\nContact: …",
    ],
    "Something else": ["General enquiry", "My message: …\nName: …"],
  };
  const [templateSubject, templateBody] =
    templates[topic] || templates["Something else"];
  const body = useMemo(
    () =>
      `Hi Guilui team,\n\n${templateBody}\n\nAdditional details: ${message || "[Add details here]"}\n\nName: ${name || "[Your name]"}\nRegistered email: ${email || "[Your email]"}`,
    [templateBody, message, name, email],
  );
  const subject = templateSubject;
  const mailto = `mailto:hello@guiluipanmei.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  async function copy() {
    try {
      await navigator.clipboard.writeText("hello@guiluipanmei.com");
      setStatus("Email address copied.");
    } catch {
      setStatus("Please copy: hello@guiluipanmei.com");
    }
  }
  return (
    <main className="public-page">
      <div className="container">
        <PageHero
          eyebrow="WE'RE HERE TO HELP"
          title={
            <>
              Let's <em>talk.</em>
            </>
          }
          lead="Choose what you need help with and prepare an email to the team. You can edit the message in your own email app before sending."
        />
        <div className="contact-layout">
          <section className="contact-form-panel">
            <label>
              What do you need help with?
              <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                {options.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label>
              Your name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={80}
              />
            </label>
            <label>
              Registered email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                maxLength={254}
              />
            </label>
            <label>
              Your message
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us how we can help..."
                maxLength={3000}
              />
            </label>
            <a className="button button-gold" href={mailto}>
              Open in my email app <Mail size={16} />
            </a>
          </section>
          <aside className="contact-side">
            <h2>Concierge Desk</h2>
            <p>For support and enquiries, reach the team directly.</p>
            <a href="mailto:hello@guiluipanmei.com">hello@guiluipanmei.com</a>
            <button className="copy-email" onClick={copy}>
              <Copy size={15} /> Copy email address
            </button>
            {status && <p role="status">{status}</p>}
            <div className="contact-social">
              <span>FOLLOW ALONG</span>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube size={17} /> YouTube
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={17} /> Instagram
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
