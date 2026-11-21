import { Link } from "react-router-dom";
export function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}
export function PageIntro({ eyebrow = "GUILUI PANMEI", title, description }) {
  return (
    <section className="page-intro">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
export function CTA({
  to = "/courses/alter-ego-101",
  children = "Explore Course 101",
  secondary = false,
}) {
  return (
    <Link
      className={secondary ? "button button-secondary" : "button button-gold"}
      to={to}
    >
      {children}
    </Link>
  );
}
export function FeatureCard({ number, title, children }) {
  return (
    <article className="feature-card">
      {number && <span className="step-number">{number}</span>}
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
