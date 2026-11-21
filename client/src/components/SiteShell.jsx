import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  UserRound,
  ArrowUpRight,
  Moon,
  Sun,
  Youtube,
  Instagram,
} from "lucide-react";
import { footerGroups } from "../data/routes";

export function SiteHeader({ theme = "light", onToggleTheme = () => {} }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="nav-inner">
          <Link to="/" className="brand" aria-label="GUILUI PANMEI home">
            <img
              className="brand-image"
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiDmoGgTjErrrR9vgSoL1SFVOIc3lfrP0wyU-clkfGcYbKVcfkBKJAWJuuoi5DTiy50R9LNy79PWnSCHxt0-qItXScfcrRMAB2iVr8PERDTPONA1Di9keG4BSCkrm8YkaOZhgvDE7idp5oQ0LSu6UaO259YeSP7qZ6ffH6Rb53wUVjWc1bdQGP5tt4RJicP-qgakUE1v2ELim2BbM2MEDWK2OMiPn7UPi3xIxJJawfJrVCo_Qe6wPQ"
            />
            <span>GUILUI PANMEI CO</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {/* {publicLinks.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {label}
              </NavLink>
            ))} */}
            <Link
              className="contact-social"
              to="http://www.youtube.com/@GuiluiPanmei"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube size={17} /> YouTube
            </Link>
            <Link
              className="contact-social"
              to="https://www.instagram.com/guilui_panmei?utm_source=ig_web_button_share_sheet&cnvx=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={17} /> Instagram
            </Link>
          </nav>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <Link className="login-link" to="/login">
              Login
            </Link>
            {/* <Link className="profile-link" to="/login" aria-label="Account">
              <UserRound size={17} />
            </Link> */}
            <button
              className="menu-toggle"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {publicLinks.map(([label, path]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand footer-logo">
            <img
              className="brand-image"
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiDmoGgTjErrrR9vgSoL1SFVOIc3lfrP0wyU-clkfGcYbKVcfkBKJAWJuuoi5DTiy50R9LNy79PWnSCHxt0-qItXScfcrRMAB2iVr8PERDTPONA1Di9keG4BSCkrm8YkaOZhgvDE7idp5oQ0LSu6UaO259YeSP7qZ6ffH6Rb53wUVjWc1bdQGP5tt4RJicP-qgakUE1v2ELim2BbM2MEDWK2OMiPn7UPi3xIxJJawfJrVCo_Qe6wPQ"
            />
            <span>GUILUI PANMEI CO</span>
          </div>
          <p>Beyond Limits.</p>
          <p className="footer-tagline">Built by me. For you. For society.</p>
          <a href="mailto:hello@guiluipanmei.com">hello@guiluipanmei.com</a>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map(([label, path]) => (
              <Link key={path} to={path}>
                {label}
                <ArrowUpRight size={12} />
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} GUILUI PANMEI. All rights reserved.
        </span>
        <span>Beyond Limits · India</span>
      </div>
    </footer>
  );
}
