"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLoading } from "./LoadingContext";

export default function Preloader() {
  const { setIsLoading } = useLoading();
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef(null);
  const brandRef = useRef(null);
  const progressRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true);
        setIsLoading(false);
        document.body.style.overflow = "";
      },
    });

    // Start loading animation
    let progress = { value: 0 };
    tl.to(progress, {
      value: 100,
      duration: 2.2,
      ease: "power3.inOut",
      onUpdate: () => {
        if (progressRef.current) {
          progressRef.current.innerText = Math.round(progress.value) + "%";
        }
        if (barRef.current) {
          barRef.current.style.width = progress.value + "%";
        }
      },
    })
      .to(
        [brandRef.current, barRef.current?.parentElement, progressRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: "power2.inOut",
          stagger: 0.1,
        },
        "-=0.2"
      )
      .to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
        },
        "+=0.1"
      );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#0b0b0c",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          maxWidth: "250px",
        }}
      >
        <div
          ref={brandRef}
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            fontFamily: "'Space Grotesk', sans-serif",
            textTransform: "uppercase",
          }}
        >
          Charan<span style={{ color: "#d94b2b" }}>.</span>
        </div>

        <div style={{ width: "100%", position: "relative" }}>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              ref={barRef}
              style={{
                width: "0%",
                height: "100%",
                backgroundColor: "#d94b2b",
              }}
            />
          </div>
          <div
            ref={progressRef}
            style={{
              marginTop: "12px",
              fontSize: "0.85rem",
              fontWeight: 400,
              fontFamily: "'Space Mono', monospace",
              textAlign: "right",
              letterSpacing: "0.1em",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            0%
          </div>
        </div>
      </div>
    </div>
  );
}
