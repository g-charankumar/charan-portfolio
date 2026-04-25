"use client";
import { useState, useRef, useEffect } from "react";

export default function CustomDropdown({ options, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select-container" ref={containerRef}>
      <button
        type="button"
        className={`custom-select-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="current-value">{value || placeholder}</span>
        <svg
          className="arrow-icon"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="custom-select-options" role="listbox">
          {options.map((option) => (
            <li
              key={option}
              className={`custom-select-option ${value === option ? "selected" : ""}`}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={value === option}
            >
              {option}
              {value === option && (
                <svg className="check-icon" viewBox="0 0 12 10" fill="none">
                  <path
                    d="M1 5L4.5 8.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
