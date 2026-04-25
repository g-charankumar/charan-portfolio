/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  corePlugins: {
    // Disable Tailwind's CSS reset so it doesn't fight Bootstrap's reset
    // and our custom base styles in globals.css. You still get all utilities.
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        // Mirror the CSS custom props so Tailwind classes can reach them
        bg: "var(--bg)",
        ink: "var(--ink)",
        "ink-dim": "var(--ink-dim)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        serif: ["var(--f-serif)", "serif"],
        "serif-it": ["var(--f-serif-it)", "serif"],
        sans: ["var(--f-sans)", "sans-serif"],
        mono: ["var(--f-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
