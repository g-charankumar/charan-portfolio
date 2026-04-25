"use client";
import { useReveal } from "./hooks";

const SKILLS = [
  {
    title: "Web Development",
    items: [
      "HTML5",
      "CSS",
      "JavaScript",
      "PHP",
      "React",
      "Tailwind",
      "Node.js",
      "Git",
    ],
  },
  {
    title: "UI / UX Design",
    items: [
      "Figma",
      "Framer",
      "Prototyping",
      "Design Systems",
      "User Research",
      "Wireframing",
    ],
  },
  {
    title: "Graphic Design",
    items: [
      "Illustrator",
      "Photoshop",
      "Brand Identity",
      "Typography",
      "Print",
      "Packaging",
    ],
  },
  {
    title: "AI & Generative AI",
    items: [
      "Prompt Engineer",
      "AI Integration",
      "Claude Code",
      "Vertex AI",
      "ElevenLabs",
      "n8n",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "AI Web Development Specialist",
    company: "Rovix AI",
    period: "Jun 2025 — Feb 2026",
    desc: "Developed AI-powered web applications and intelligent chatbots integrating tools like ChatGPT and DALL-E for conversational interfaces and visual content.",
  },
  {
    role: "UI Designer & Frontend Developer",
    company: "The Brand Chimp",
    period: "Nov 2024 — Jun 2025",
    desc: "Developed responsive and user-centric web interfaces using React, Tailwind CSS, HTML, and JavaScript, translating Figma prototypes into high-performance websites.",
  },
  {
    role: "Web Developer Intern",
    company: "Nexus info",
    period: "Sep 2024 — Nov 2024",
    desc: "Supported the design and implementation of responsive web interfaces, collaborating with cross-functional teams to deliver efficient, scalable web solutions.",
  },
];

export default function About() {
  const headRef = useReveal();
  const leftRef = useReveal();
  const rightRef = useReveal();
  const expRef = useReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <div
          ref={headRef}
          className="section-head row align-items-end g-3 reveal"
        >
          <div className="col-12 col-md">
            <div className="section-head-label d-flex align-items-center">
              <span className="dot" />
              <span className="eyebrow">About Me — 01</span>
            </div>
            <h2 className="section-title">
              A designer who <em>codes</em>,<br />a developer who{" "}
              <em>draws</em>.
            </h2>
          </div>
          <div className="col-12 col-md-auto section-head-index">
            [ &nbsp; Section 01 / 05 &nbsp; ]<br />
            Hyderabad, IN · Available
          </div>
        </div>

        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-12 col-lg-6">
            <div ref={leftRef} className="reveal">
              <p className="about-lead">
                I'm a multi-disciplinary designer with <em>1.6 years</em> of
                industry experience — shipping <em>25+</em> websites &amp; CRM
                dashboards, and crafting visual identities for{" "}
                <em>3 companies</em> across retail, SaaS, and lifestyle.
              </p>

              <figure className="about-portrait">
                <img
                  src="/images/portrait.jpeg"
                  alt="Portrait of Charan Kumar"
                  loading="lazy"
                />
                <figcaption className="d-flex align-items-center justify-content-between">
                  <span className="pc-num">01 — Portrait</span>
                  <span className="pc-loc">Hyderabad · 2026</span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div ref={rightRef} className="reveal">
              <div className="about-body">
                <p>
                  My work sits at the intersection of{" "}
                  <strong>engineering discipline</strong> and{" "}
                  <strong>design craft</strong>. I think in grids and
                  typographic scales, but I also obsess over the 4-pixel
                  details — a button's easing curve, a label's letter-spacing,
                  the breathing room between sections.
                </p>
                <p>
                  Whether I'm architecting a CRM for an internal ops team or
                  directing a brand launch, the goal is the same:{" "}
                  <strong>clarity, character, and conversion.</strong> I
                  partner with founders, product teams, and agencies who want
                  work that feels considered — not generated.
                </p>
              </div>

              <div className="about-stats row g-3">
                <div className="stat col-4">
                  <strong>1.6</strong>
                  <span>Years Exp.</span>
                </div>
                <div className="stat col-4">
                  <strong>25+</strong>
                  <span>Projects Shipped</span>
                </div>
                <div className="stat col-4">
                  <strong>02</strong>
                  <span>Brand Systems</span>
                </div>
              </div>

              <div className="skills">
                {SKILLS.map((group) => (
                  <div key={group.title} className="skills-group">
                    <h4>{group.title}</h4>
                    <ul className="pill-list d-flex flex-wrap">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="experience">
          <div ref={expRef} className="experience-list d-flex gap-5 overflow-x-auto reveal-stagger">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="experience-item">
                <div className="d-flex align-items-baseline justify-content-between gap-3 mb-1">
                  <strong className="exp-role">{exp.role}</strong>
                  <span className="exp-period mono">{exp.period}</span>
                </div>
                <div className="exp-company eyebrow mb-3">{exp.company}</div>
                <p className="exp-desc mb-0">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
