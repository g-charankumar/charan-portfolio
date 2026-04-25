"use client";
import { useReveal } from "./hooks";

const QUOTES = [
  {
    avatar: "S",
    name: "Khaja Mulla",
    role: "Founder · Rovix AI",
    quote:
      "Charan transformed our complex AI workflows into a clean, intuitive dashboard. The user engagement jumped significantly within the first month. He doesn't just build features; he builds experiences.",
  },
  {
    avatar: "V",
    name: "Venkat Chowdary",
    role: "CEO · Yardfullawn Services",
    quote:
      "Charan helped us build a consistent, modern identity for Yardful across both our web platform and social media. His branding systems are scalable, visually striking, and easy to implement.",
  },
  {
    avatar: "E",
    name: "Manager",
    role: "Operations · Txpre",
    quote:
      "We needed a high-performance web platform with a complex search system. Charan delivered a solution that not only looks stunning but maintains a perfect Lighthouse score. Highly recommended.",
  },
];

export default function Testimonials() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div
          ref={headRef}
          className="section-head row align-items-end g-3 reveal"
        >
          <div className="col-12 col-md">
            <div className="section-head-label d-flex align-items-center">
              <span className="dot" />
              <span className="eyebrow">Kind Words — 03</span>
            </div>
            <h2 className="section-title">
              Testimonials <em>&</em> client notes.
            </h2>
          </div>
          <div className="col-12 col-md-auto section-head-index">
            [ &nbsp; 5.0 ★ Avg. &nbsp; ]<br />
            From 18 clients
          </div>
        </div>

        <div ref={gridRef} className="row g-3 reveal-stagger">
          {QUOTES.map((q) => (
            <div key={q.name} className="col-12 col-lg-4">
              <figure className="test-card h-100">
                <div className="quote-mark">&ldquo;</div>
                <blockquote className="test-quote">{q.quote}</blockquote>
                <figcaption className="test-author d-flex align-items-center gap-3">
                  <div className="test-avatar d-flex align-items-center justify-content-center">
                    {q.avatar}
                  </div>
                  <div className="test-info">
                    <strong>{q.name}</strong>
                    <span>{q.role}</span>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
