"use client";
import { useState } from "react";
import { useReveal } from "./hooks";
import CustomDropdown from "./CustomDropdown";

function SocialIcon({ label }) {
  switch (label) {
    case "Dribbble":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
          <path d="M2 12a15.3 15.3 0 0 1 10-4 15.3 15.3 0 0 1 10 4" />
          <path d="M6.5 3.5c3 3.5 3 13.5 0 17" />
          <path d="M17.5 3.5c-3 3.5-3 13.5 0 17" />
        </svg>
      );
    case "Behance":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 5h4a3 3 0 0 1 0 6H3V5zm0 7h4a3 3 0 0 1 0 6H3v-6z" />
          <path d="M13 15a3.5 3.5 0 0 0 7 0v-1a3.5 3.5 0 0 0-7 0" />
          <path d="M13 15h7" />
          <path d="M14 10h5" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Contact() {
  const headRef = useReveal();
  const leftRef = useReveal();
  const formRef = useReveal();
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Web Development",
    budget: "< 2k",
    timing: "ASAP",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formDataObj = new FormData(e.target);
    formDataObj.append("access_key", "b08d5cf9-15e1-4894-85fe-0d651adf41bb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        e.target.reset();
        setFormData({
          name: "",
          email: "",
          type: "Web Development",
          budget: "< 2k",
          timing: "ASAP",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Error", data);
        setStatus("idle");
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Submit Error", error);
      setStatus("idle");
      alert("Network error. Please try again later.");
    }
  };

  const btnLabel =
    status === "sending"
      ? "Sending…"
      : status === "sent"
        ? "✓ Message Sent"
        : "Send Message";

  return (
    <section className="section" id="contact">
      <div className="container">
        <div
          ref={headRef}
          className="section-head row align-items-end g-3 reveal"
        >
          <div className="col-12 col-md">
            <div className="section-head-label d-flex align-items-center">
              <span className="dot" />
              <span className="eyebrow">Let's Talk — 04</span>
            </div>
            <h2 className="section-title">
              Got a <em>project</em><br />in mind?
            </h2>
          </div>
          <div className="col-12 col-md-auto section-head-index">
            [ &nbsp; Open for briefs &nbsp; ]<br />
            Q2 — Q3 · 2026
          </div>
        </div>

        <div className="row g-4 g-lg-5 align-items-start">
          <div className="col-12 col-lg-6">
            <div ref={leftRef} className="reveal">
              <p className="contact-lead">
                Tell me <em>what you're</em> building, I'll tell you how I
                can help.
              </p>

              <div className="contact-info">
                <a
                  className="contact-row d-flex align-items-center justify-content-between"
                  href="mailto:gcharankumar027@gmail.com"
                >
                  <span className="label">Email</span>
                  <span className="value">gcharankumar027@gmail.com</span>
                </a>
                <a
                  className="contact-row d-flex align-items-center justify-content-between"
                  href="tel:+918712350840"
                >
                  <span className="label">Phone</span>
                  <span className="value">+91 · 8712350840</span>
                </a>
                <div className="contact-row d-flex align-items-center justify-content-between">
                  <span className="label">Location</span>
                  <span className="value">Hyderabad, IN</span>
                </div>
                <div className="contact-row d-flex align-items-center justify-content-between">
                  <span className="label">Availability</span>
                  <span className="value accent">Accepting — Now</span>
                </div>
              </div>

              <div className="socials d-flex flex-wrap gap-2">
                {[
                  { label: "Dribbble", href: "https://dribbble.com/charanon" },
                  { label: "Behance", href: "https://www.behance.net/charankumar46" },
                  { label: "LinkedIn", href: "www.linkedin.com/in/g-charankumar" },
                  { label: "Instagram", href: "https://www.instagram.com/_charano_" },
                  { label: "GitHub", href: "https://github.com/g-charankumar" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="d-inline-flex align-items-center justify-content-center"
                  >
                    <SocialIcon label={social.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <form
              ref={formRef}
              className="contact-form reveal"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <div className="field">
                    <label htmlFor="f-name">Your Name</label>
                    <input
                      type="text"
                      id="f-name"
                      name="name"
                      placeholder="Jane Doe"
                      required
                      autoComplete="name"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="field">
                    <label htmlFor="f-email">Email</label>
                    <input
                      type="email"
                      id="f-email"
                      name="email"
                      placeholder="jane@company.com"
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <label htmlFor="f-type">Project Type</label>
                <CustomDropdown
                  options={[
                    "Web Development",
                    "UI / UX Design",
                    "CRM / Dashboard",
                    "Brand Identity",
                    "Just saying hi",
                  ]}
                  value={formData.type}
                  onChange={(val) => setFormData({ ...formData, type: val })}
                  placeholder="Select project type"
                />
                <input type="hidden" name="type" value={formData.type} />
              </div>

              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <div className="field">
                    <label htmlFor="f-budget">Budget (USD)</label>
                    <CustomDropdown
                      options={["< 2k", "2k — 5k", "5k — 15k", "15k+"]}
                      value={formData.budget}
                      onChange={(val) => setFormData({ ...formData, budget: val })}
                      placeholder="Select budget"
                    />
                    <input type="hidden" name="budget" value={formData.budget} />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="field">
                    <label htmlFor="f-timing">Timing</label>
                    <CustomDropdown
                      options={["ASAP", "1 — 2 months", "3+ months", "Exploring"]}
                      value={formData.timing}
                      onChange={(val) => setFormData({ ...formData, timing: val })}
                      placeholder="Select timing"
                    />
                    <input type="hidden" name="timing" value={formData.timing} />
                  </div>
                </div>
              </div>

              <div className="field">
                <label htmlFor="f-msg">Tell me about it</label>
                <textarea
                  id="f-msg"
                  name="message"
                  placeholder="A few sentences on what you're building — I'll reply within 24h."
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn d-inline-flex align-items-center justify-content-center"
                style={{
                  background: status === "sent" ? "#3a7d44" : undefined,
                  pointerEvents:
                    status === "sending" || status === "sent" ? "none" : "auto",
                }}
              >
                {btnLabel}
                {status === "idle" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                )}
              </button>
              <p className="form-note">
                I reply to every email — usually within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
