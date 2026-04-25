"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about", label: "About Me", id: "about" },
  { href: "/#work", label: "Projects", id: "work" },
  { href: "/#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Scroll state for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — only runs on the home page where the sections exist.
  // On /work/[slug] pages there are no such sections, so the observer
  // simply never fires and activeId stays default.
  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If a section is intersecting the top 40% of the screen, set it as active
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape + when resizing back to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 1025px)");
    const onMq = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener?.("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener?.("change", onMq);
    };
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}`}
      id="siteHeader"
    >
      <div className="container d-flex align-items-center justify-content-between gap-3">
        <Link
          href="/#home"
          className="logo flex-shrink-0 d-flex align-items-center gap-3"
          aria-label="Charan Kumar, Design Portfolio"
        >
          <div className="d-flex flex-column justify-content-center">
            <span className="l-1">
              charan<em>.</em>kumar
            </span>
            <span className="l-2">designer · developer</span>
          </div>
        </Link>

        <ul className={`nav-list${menuOpen ? " open" : ""}`} id="navList">
          {NAV.map((n) => (
            <li key={n.id}>
              <Link
                href={n.href}
                className={activeId === n.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right d-flex align-items-center gap-2 gap-sm-3 flex-shrink-0">
          <a
            href="/images/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume d-inline-flex align-items-center"
            aria-label="Download resume"
          >
            <span>Resume</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v14" />
              <path d="m6 11 6 6 6-6" />
              <path d="M5 21h14" />
            </svg>
          </a>
          <button
            className={`menu-toggle d-lg-none${menuOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="navList"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
