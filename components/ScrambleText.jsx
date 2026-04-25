"use client";
import { useState, useEffect, useRef } from "react";

import { useLoading } from "./LoadingContext";

const CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export default function ScrambleText({
  text,
  delay = 0,
  duration = 1.5,
  className = "",
}) {
  const { isLoading } = useLoading();
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const rafRef = useRef(null);
  const startTimeRef = useRef(0);
  const textRef = useRef(text);

  // Update textRef if text prop changes
  useEffect(() => {
    textRef.current = text;
  }, [text]);

  useEffect(() => {
    if (isLoading) return;
    
    const timer = setTimeout(() => {
      setIsAnimating(true);
      startTimeRef.current = performance.now();
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay, isLoading]);

  useEffect(() => {
    if (!isAnimating || isFinished) return;

    const animate = (now) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing: easeInOutQuad for a smoother start and end
      const eased = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      if (progress >= 1) {
        setDisplayText(textRef.current);
        setIsFinished(true);
        return;
      }

      const currentText = textRef.current;
      const result = currentText.split("").map((char, i) => {
        if (char === " ") return " ";
        
        // Each character has its own "settle" threshold based on its position and some randomness
        // This creates a "stochastic reveal" which feels much smoother than a hard line.
        const charThreshold = (i / currentText.length) * 0.5 + Math.random() * 0.5;
        
        if (eased > charThreshold) {
          return char;
        }
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join("");

      setDisplayText(result);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isAnimating, isFinished, duration]);

  return (
    <span 
      className={`${className} scramble-text-container`}
      style={{ 
        position: "relative", 
        display: "inline-block",
        filter: !isFinished && isAnimating ? "blur(0.4px)" : "none",
        transition: "filter 0.3s ease",
      }}
    >
      <span style={{ opacity: 0 }} aria-hidden="true">
        {text}
      </span>
      <span 
        style={{ 
          position: "absolute", 
          left: 0, 
          top: 0, 
          width: "100%",
          opacity: isAnimating ? 1 : 0,
          transition: "opacity 0.2s ease"
        }}
      >
        {displayText}
      </span>
    </span>
  );
}
