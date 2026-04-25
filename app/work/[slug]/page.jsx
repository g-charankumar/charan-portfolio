// Dynamic route: /work/<slug>
// Server component. Uses generateStaticParams so Next pre-renders
// one HTML file per project at build time — great for SEO.
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ProjectThumb from "@/components/ProjectThumb";
import WebScroller from "@/components/WebScroller";
import AutoSlider from "@/components/AutoSlider";
import { projects, getProjectBySlug, getNextProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProjectBySlug(params.slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.name} — Charan Kumar`,
    description: p.tagline,
  };
}

export default function ProjectDetail({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const next = getNextProject(params.slug);

  return (
    <>
      <CursorGlow />
      <Header />

      <section className="project-hero">
        <div className="container">
          <Link
            href="/#work"
            className="back-link d-inline-flex align-items-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to all work
          </Link>

          <div className="project-hero-eyebrow d-flex flex-wrap align-items-center">
            <span className="chip chip-accent">{project.type}</span>
            <span className="chip">N° {project.num}</span>
            <span className="project-year">{project.year}</span>
          </div>

          <h1 className="project-title">
            {project.name.split("—")[0]}
            {project.name.includes("—") && (
              <>
                <br />
                <em>{project.name.split("—")[1].trim()}</em>
              </>
            )}
          </h1>

          <p className="project-tagline">
            <em>{project.tagline}</em>
          </p>

          {project.link && (
            <div className="mb-5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light d-inline-flex align-items-center gap-2"
                style={{
                  borderRadius: "100px",
                  padding: "0.5rem 1.5rem",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                }}
              >
                Visit Live Site
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="16"
                  height="16"
                >
                  <path d="M7 17l9.2-9.2M17 16.5V7H7.5" />
                </svg>
              </a>
            </div>
          )}

          <div className="project-meta-row row g-3 g-md-4">
            <div className="col-6 col-md-3 project-meta-cell">
              <span className="meta-label">Role</span>
              <span className="meta-value">{project.role}</span>
            </div>
            <div className="col-6 col-md-3 project-meta-cell">
              <span className="meta-label">Duration</span>
              <span className="meta-value">{project.duration}</span>
            </div>
            <div className="col-6 col-md-3 project-meta-cell">
              <span className="meta-label">Client</span>
              <span className="meta-value">{project.client}</span>
            </div>
            <div className="col-6 col-md-3 project-meta-cell">
              <span className="meta-label">Year</span>
              <span className="meta-value">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={`project-cover ${project.gallery ? "project-cover-portrait-wrapper" : ""}`}>
          <div className={`project-cover-art d-flex align-items-center justify-content-center ${project.gallery ? "project-cover-portrait" : ""}`}>
            {project.cat === "web" ? (
              <WebScroller
                image={project.scrollerImg}
                url={project.link}
                alt={project.name}
              />
            ) : project.gallery ? (
              <AutoSlider images={project.gallery} />
            ) : (
              <ProjectThumb thumbKey={project.thumbKey} />
            )}
          </div>
          <div className="project-cover-caption d-flex align-items-center justify-content-between">
            <span className="pc-num">Cover — {project.num}</span>
            <span>{project.type}</span>
          </div>
        </div>
      </div>

      <section className="project-section">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-12 col-lg-4">
              <span className="eyebrow">Overview</span>
              <h2 className="project-section-title">
                The <em>brief.</em>
              </h2>
            </div>
            <div className="col-12 col-lg-8">
              <div className="project-prose">
                <p className="lead">{project.tagline}</p>
                {project.overview
                  ? project.overview.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                  : <p>{project.desc}</p>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section project-section-tinted">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <span className="eyebrow">Process — 03</span>
              <h2 className="project-section-title">
                How it came <em>together.</em>
              </h2>
            </div>
            <div className="col-12 col-lg-8">
              <div className="phases">
                {(project.phases || []).map((phase, i) => (
                  <div className="phase" key={i}>
                    <div className="phase-num">{String(i + 1).padStart(2, "0")}</div>
                    <div className="phase-body">
                      <h3 className="phase-title">{phase.title}</h3>
                      <p>{phase.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-next-section">
        <div className="container">
          <div className="project-next-label eyebrow">
            Next Project — {next.num}
          </div>
          <Link href={`/work/${next.slug}`} className="project-next d-flex align-items-center justify-content-between gap-3">
            <div>
              <span className="next-num">N° {next.num}</span>
              <h3 className="next-title">
                {next.name.split("—")[0]}
                {next.name.includes("—") && (
                  <>
                    {" "}
                    <em>{next.name.split("—")[1].trim()}</em>
                  </>
                )}
              </h3>
              <div className="next-meta">{next.type} · {next.year}</div>
            </div>
            <div className="next-arrow d-flex align-items-center justify-content-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
