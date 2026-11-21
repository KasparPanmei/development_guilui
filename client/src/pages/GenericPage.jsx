import { Link, useLocation, useParams } from "react-router-dom";
import { pageContent } from "../data/routes";
import { PageIntro, CTA, FeatureCard } from "../components/Primitives";
import { Reveal } from "../components/Motion";
export default function GenericPage() {
  const location = useLocation();
  const params = useParams();
  let route = location.pathname;
  if (route.startsWith("/reset-password/")) route = "/forgot-password";
  const [title, subtitle, description] = pageContent[route] || [
    "Beyond this page",
    "The next chapter is being prepared.",
    "This destination is part of the approved route map.",
  ];
  const isLegal = route.startsWith("/legal/");
  const isPortal =
    route.startsWith("/student/") || route.startsWith("/affiliate/");
  return (
    <main className={isPortal ? "portal-page" : "public-page"}>
      <div className="container">
        <PageIntro
          eyebrow={
            isLegal
              ? "GUILUI PANMEI · LEGAL"
              : isPortal
                ? "YOUR PRIVATE SPACE"
                : "BEYOND LIMITS"
          }
          title={title}
          description={subtitle}
        />
        <div className="content-panel">
          <h2>{isLegal ? "Important information" : title}</h2>
          <p>{description}</p>
          {route === "/contact" ? (
            <ContactForm />
          ) : route === "/verify-certificate" || route === "/verification" ? (
            <CertificateForm />
          ) : route === "/login" ||
            route === "/register" ||
            route === "/forgot-password" ||
            route === "/verify-phone" ? (
            <AccountForm route={route} />
          ) : null}
          {isPortal && (
            <div className="portal-placeholder">
              <strong>Account data is not connected yet.</strong>
              <span>
                This screen will show verified data after authentication and
                entitlement services are implemented.
              </span>
            </div>
          )}
          {isLegal && (
            <p className="muted-note">
              Draft placeholder — requires legal review and approval before
              publication.
            </p>
          )}
          {!isLegal && !isPortal && (
            <div className="feature-grid">
              <FeatureCard title="Built around the experience">
                A clear, practical journey with the founder-led brand at its
                centre.
              </FeatureCard>
              <FeatureCard title="Designed for real progress">
                Access, progress and eligibility are verified by the platform.
              </FeatureCard>
            </div>
          )}
          <div className="inline-actions">
            {/* <CTA to={isPortal ? "/" : "/courses/alter-ego-101"}>
              {isPortal ? "Back to Home" : "Explore Course1"}
            </CTA> */}
            <Link to="/contact" className="text-link">
              Need help? Contact us <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    topic: "Course & package enquiry",
    message: "",
  });
  const [status, setStatus] = React.useState("");
  async function submit(e) {
    e.preventDefault();
    setStatus("Sending…");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/v1/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state),
        },
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send");
      setStatus("Your message has been received.");
      setState({
        name: "",
        email: "",
        topic: "Course & package enquiry",
        message: "",
      });
    } catch {
      setStatus(
        "The contact service is not connected. Please email hello@guiluipanmei.com.",
      );
    }
  }
  return (
    <form className="form-grid" onSubmit={submit}>
      <label>
        Your name
        <input
          required
          minLength="2"
          maxLength="80"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </label>
      <label>
        Email address
        <input
          required
          type="email"
          maxLength="254"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </label>
      <label>
        Topic
        <select
          value={state.topic}
          onChange={(e) => setState({ ...state, topic: e.target.value })}
        >
          {[
            // "Course & package enquiry",
            "Payment or checkout issue",
            "Refund request",
            "Login or account access",
            // "Course or video access",
            // "Certificate query",
            // "Affiliate program",
            // "Prime membership",
            "Something else",
          ].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
      <label className="full">
        Your message
        <textarea
          required
          minLength="10"
          maxLength="4000"
          rows="5"
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        />
      </label>
      <button className="button button-gold" type="submit">
        Send inquiry
      </button>
      {status && <p role="status">{status}</p>}
    </form>
  );
}
function CertificateForm() {
  const [id, setId] = React.useState("");
  const [status, setStatus] = React.useState("");
  return (
    <form
      className="form-grid"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus(
          "Public certificate verification will be enabled after the certificate registry is implemented. No validity result has been generated.",
        );
      }}
    >
      <label className="full">
        Certificate ID
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          maxLength="80"
          placeholder="Enter certificate ID"
        />
      </label>
      <button className="button button-gold">Check availability</button>
      {status && (
        <p className="full" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
function AccountForm({ route }) {
  const isRegister = route === "/register";
  return (
    <div className="account-coming-soon">
      <strong>Secure account services are being implemented.</strong>
      <p>
        {isRegister
          ? "Registration, email verification and phone verification will be enabled together."
          : route === "/forgot-password"
            ? "Password recovery will be available when secure identity and email delivery are connected."
            : "Login will be enabled after the session and account security services are ready."}
      </p>
      <Link className="text-link" to="/contact">
        Need help? Contact the team <span>→</span>
      </Link>
    </div>
  );
}
import React from "react";
