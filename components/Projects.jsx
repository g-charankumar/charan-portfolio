"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { projects, filters } from "@/data/projects";
import ProjectThumb from "./ProjectThumb";
import ScrambleText from "./ScrambleText";
import { useReveal } from "./hooks";

export default function Projects() {
  const [active, setActive] = useState("all");
  const headRef = useReveal();
  const filterRef = useReveal();
  const footRef = useReveal();
  const gridRef = useRef(null);

  const [showAll, setShowAll] = useState(false);

  // On filter change, re-run the stagger reveal on the visible cards.
  // In the old script this was a WAAPI .animate() call; here we just
  // key-force a remount via React's own keys (see below in map).
  useEffect(() => {
    if (!gridRef.current) return;
    gridRef.current.classList.remove("in");
    setShowAll(false); // Reset to showing only 3 on filter change
    // Re-trigger the stagger reveal
    requestAnimationFrame(() => {
      gridRef.current?.classList.add("in");
    });
  }, [active]);

  const visible = projects.filter(
    (p) => active === "all" || p.cat === active,
  );

  const displayed = showAll ? visible : visible.slice(0, 3);

  return (
    <section className="section" id="work">
      <div className="container">
        <div
          ref={headRef}
          className="section-head row align-items-end g-3 reveal"
        >
          <div className="col-12 col-md">
            <div className="section-head-label d-flex align-items-center">
              <span className="dot" />
              <span className="eyebrow">Selected Work — 02</span>
            </div>
            <h2 className="section-title">
              Worked on <em>projects.</em>
            </h2>
          </div>
          <div className="col-12 col-md-auto section-head-index">
            [ &nbsp; 25+ Delivered &nbsp; ]<br />
            2023 — 2026
          </div>
        </div>

        <div
          ref={filterRef}
          className="projects-filter d-flex flex-wrap gap-2 reveal"
          role="tablist"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              className={active === f.key ? "active" : ""}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className="row g-3 g-md-4 reveal-stagger projects-grid in"
          id="projectsGrid"
        >
          {displayed.map((p) => (
            // key includes active filter so React remounts cards on switch,
            // which naturally re-runs the stagger CSS transitions.
            <div
              key={`${active}-${p.slug}`}
              className="col-12 col-sm-6 col-lg-4 project-item"
              data-cat={p.cat}
            >
              <Link
                href={`/work/${p.slug}`}
                className="project-card-link"
              >
                <article className="project-card">
                  <div className="project-thumb">
                    <span className="project-thumb-label">{p.label}</span>
                    <span className="project-thumb-year">{p.year}</span>
                    <div className="project-thumb-art">
                      <ProjectThumb thumbKey={p.thumbKey} />
                    </div>
                  </div>
                  <div className="project-meta d-flex align-items-center justify-content-between">
                    <span className="project-type">
                      <ScrambleText text={p.type} delay={0.2} duration={0.6} />
                    </span>
                    <span className="project-num">N° {p.num}</span>
                  </div>
                  <h3 className="project-name">
                     {p.name}
                  </h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags d-flex flex-wrap">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="arrow">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>

        {visible.length > 3 && (
          <div className="text-center mt-5 mb-4 reveal in">
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                background: "transparent",
                border: "1px solid rgba(241, 235, 225, 0.2)",
                color: "#f1ebe1",
                padding: "0.75rem 1.5rem",
                borderRadius: "30px",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.background = "rgba(241, 235, 225, 0.1)"}
              onMouseOut={(e) => e.target.style.background = "transparent"}
            >
              {showAll ? "Show Less" : "Click Here for More"}
            </button>
          </div>
        )}

        <div
          ref={footRef}
          className="projects-foot d-flex flex-wrap align-items-center justify-content-between gap-3 reveal"
        >
          <p>
            +6 more projects under progress — happy to walk through them on a
            call.
          </p>
          <Link
            href="/#contact"
            className="view-all d-inline-flex align-items-center"
          >
            Request Full Archive
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
