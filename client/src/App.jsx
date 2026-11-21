import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SiteHeader, SiteFooter } from "./components/SiteShell";
import Home from "./pages/Home";
import GenericPage from "./pages/GenericPage";
import {
  PackagesPage,
  AboutPage,
  CoursesPage,
  CourseDetailPage,
  AffiliatesPage,
  PrimePage,
  LegalPage,
  ContactPage,
} from "./pages/PublicPages";
import { pageContent } from "./data/routes";

function ScrollAndTitle() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    const path = location.pathname.startsWith("/reset-password/")
      ? "/forgot-password"
      : location.pathname;
    const title = pageContent[path]?.[0] || "Beyond Limits";
    document.title = `${title} | GUILUI PANMEI`;
    const description =
      pageContent[path]?.[2] ||
      "Beyond Limits. Built by me. For you. For society.";
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", description);
    const canonical =
      document.querySelector('link[rel="canonical"]') ||
      document.head.appendChild(
        Object.assign(document.createElement("link"), { rel: "canonical" }),
      );
    canonical.setAttribute(
      "href",
      `https://guiluipanmei.com${location.pathname}`,
    );
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", `${title} | GUILUI PANMEI`);
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription) ogDescription.setAttribute("content", description);
  }, [location]);
  return null;
}
function AccessGate() {
  return (
    <main className="public-page">
      <div className="container">
        <section className="page-intro">
          <p className="eyebrow">PRIVATE ACCOUNT AREA</p>
          <h1>Sign in to continue.</h1>
          <p>
            This destination is part of the protected student or affiliate
            experience. Your account data is not exposed until authentication is
            enabled.
          </p>
          <Link to="/login" className="button button-gold">
            Go to login
          </Link>
        </section>
      </div>
    </main>
  );
}
function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-mark">GP</div>
      <p className="eyebrow">404 · BEYOND LIMITS</p>
      <h1>
        Beyond limits —<br />
        <em>but not beyond this page.</em>
      </h1>
      <p>The page you're looking for isn't here.</p>
      <Link to="/" className="button button-gold">
        Go Home
      </Link>
    </main>
  );
}
function Application() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = window.localStorage.getItem("gp-theme");
      return (
        stored ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      );
    } catch {
      return "light";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("gp-theme", theme);
  }, [theme]);
  return (
    <>
      <ScrollAndTitle />
      <SiteHeader
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "light" ? "dark" : "light"))
        }
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/packages" element={<PackagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/alter-ego-101" element={<CourseDetailPage />} />
        <Route path="/affiliates" element={<AffiliatesPage />} />
        <Route path="/prime" element={<PrimePage />} /> */}
        {/* 
        <Route path="/verify-certificate" element={<GenericPage />} /> */}
        {[
          "/legal/terms-and-conditions",
          "/legal/privacy-policy",
          "/legal/pricing-policy",
          "/legal/refund-policy",
          // "/legal/affiliate-terms",
          "/legal/dpdp-compliance",
        ].map((path) => (
          <Route key={path} path={path} element={<LegalPage path={path} />} />
        ))}
        {Object.keys(pageContent)
          .filter(
            (path) =>
              ![
                // "/packages",
                "/about",
                // "/courses",
                // "/courses/alter-ego-101",
                // "/affiliates",
                // "/prime",
                "/contact",
                "/legal/terms-and-conditions",
                "/legal/privacy-policy",
                "/legal/pricing-policy",
                "/legal/refund-policy",
                // "/legal/affiliate-terms",
                "/legal/dpdp-compliance",
              ].includes(path) &&
              !path.startsWith("/student/") &&
              !path.startsWith("/affiliate/"),
          )
          .map((path) => (
            <Route key={path} path={path} element={<GenericPage />} />
          ))}
        {Object.keys(pageContent)
          .filter(
            (path) =>
              path.startsWith("/student/") || path.startsWith("/affiliate/"),
          )
          .map((path) => (
            <Route key={path} path={path} element={<AccessGate />} />
          ))}
        <Route path="/reset-password/:token" element={<GenericPage />} />
        <Route
          path="/student/learn/:courseId/:lessonId"
          element={<AccessGate />}
        />
        <Route
          path="/student/practicals/:practicalId"
          element={<AccessGate />}
        />
        <Route
          path="/student/course-completion/:courseId"
          element={<AccessGate />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
export default function App() {
  return <Application />;
}
