"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useCanHover } from "./hooks";
import ScrambleText from "./ScrambleText";
import Shuffle from "./Shuffle";


const FLOATS = [
  { cls: "float-1", src: "/images/console.png", r: "8deg" },
  { cls: "float-2", src: "/images/keyboard.png", r: "10deg" },
  { cls: "float-3", src: "/images/headphone.png", r: "-14deg" },
  { cls: "float-4", src: "/images/square.png", r: "6deg" },
];
const DEPTHS = [18, 12, 22, 10];

export default function Hero() {
  const heroRef = useRef(null);
  const floatRefs = useRef([]);
  const canHover = useCanHover();

  useEffect(() => {
    if (!canHover.current) return;
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      floatRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = DEPTHS[i] || 14;
        el.style.setProperty("--mx", `${x * d}px`);
        el.style.setProperty("--my", `${y * d}px`);
      });
    };
    const onLeave = () => {
      floatRefs.current.forEach((el) => {
        if (!el) return;
        el.style.setProperty("--mx", "0px");
        el.style.setProperty("--my", "0px");
      });
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, [canHover]);

  return (
    <section
      ref={heroRef}
      className="hero d-flex align-items-center"
      id="home"
    >
      <div className="container">
        <div className="hero-inner">
          {FLOATS.map((f, i) => (
            <div
              key={f.cls}
              ref={(el) => (floatRefs.current[i] = el)}
              className={`float ${f.cls}`}
              aria-hidden="true"
            >
              {/* Using plain <img> rather than next/image because these are
                  decorative, positioned absolutely, and we want them served
                  straight from /public without Next's optimization wrapper
                  interfering with the CSS-driven sizing. */}
              <img
                src={f.src}
                alt=""
                loading="lazy"
                style={{ "--r": f.r }}
              />
            </div>
          ))}

          <div className="title-wrap">
            <span className="bl" />
            <span className="br" />

            <div className="hero-eyebrow-top d-flex flex-wrap justify-content-center">
              <span>Web</span>
              <span>UI / UX</span>
              <span>Graphic</span>
              <span>portfolio</span>
            </div>

            <h1 className="hero-title">
              <span className="line l1">
                <span style={{ color: "#d94b2b" }}>Hey, I'm</span>
              </span>
              <span className="line l2">
                <Shuffle
                  text="Charan"
                  className="anodized-text"
                  tag="span"
                  shuffleDirection="down"
                  duration={0.5}
                  animationMode="evenodd"
                  shuffleTimes={3}
                  ease="power3.out"
                  stagger={0.05}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                />
              </span>
            </h1>


            <p className="hero-sub">
              Web Developer <em>|</em> UI/UX <em>&amp;</em> Graphic Designer -
              building <em>considered</em>, human-first interfaces and brand
              systems that ship.
            </p>
          </div>

          <div className="hero-meta d-flex flex-wrap justify-content-center">
            <div className="m">
              <strong><ScrambleText text="1.6" delay={1.4} duration={0.8} /></strong>
              <span>Years Experience</span>
            </div>
            <div className="m">
              <strong><ScrambleText text="25+" delay={1.5} duration={0.8} /></strong>
              <span>Web &amp; CRM Projects</span>
            </div>
            <div className="m">
              <strong><ScrambleText text="02" delay={1.6} duration={0.8} /></strong>
              <span>Brand Identities</span>
            </div>
            <div className="m">
              <strong><ScrambleText text="100%" delay={1.7} duration={0.8} /></strong>
              <span>On-Time Delivery</span>
            </div>
          </div>

          <div className="scroll-hint d-none d-sm-flex" aria-hidden="true">
            <span>Scroll</span>
            <div className="line" />
          </div>
        </div>
      </div>
    </section>
  );
}
