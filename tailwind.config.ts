import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F7F8F3",
          elevated: "#EEF3EB",
          surface: "#E3ECE2",
          highlight: "#D5E4D6",
        },
        foreground: {
          DEFAULT: "#183C2E",
          muted: "#52685A",
          subtle: "#718477",
          dim: "#AAB7AA",
        },
        border: {
          DEFAULT: "rgba(24, 60, 46, 0.14)",
          hover: "rgba(24, 60, 46, 0.24)",
          active: "rgba(24, 60, 46, 0.36)",
        },
        accent: {
          DEFAULT: "#28583E",
          hover: "#36714F",
          glow: "rgba(40, 88, 62, 0.22)",
          subtle: "rgba(112, 157, 119, 0.14)",
          border: "rgba(40, 88, 62, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(3rem, 7vw, 6.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        "display-xl": [
          "clamp(2.5rem, 5.5vw, 5rem)",
          { lineHeight: "1.0", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "650" },
        ],
        "heading-xl": [
          "clamp(1.75rem, 3vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "600" },
        ],
        "heading-lg": [
          "clamp(1.35rem, 2.2vw, 1.85rem)",
          { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "heading-md": [
          "clamp(1.15rem, 1.6vw, 1.35rem)",
          { lineHeight: "1.35", letterSpacing: "-0.015em", fontWeight: "600" },
        ],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.04em",
        widest: "0.12em",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(24, 60, 46, 0.08), 0 0 0 1px rgba(24, 60, 46, 0.05)",
        card: "0 4px 20px -2px rgba(24, 60, 46, 0.12), 0 0 0 1px rgba(24, 60, 46, 0.08)",
        "card-hover": "0 8px 32px -4px rgba(24, 60, 46, 0.18), 0 0 0 1px rgba(24, 60, 46, 0.16)",
        accent: "0 0 30px -5px rgba(40, 88, 62, 0.28)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(24, 60, 46, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 60, 46, 0.035) 1px, transparent 1px)",
        "subtle-glow":
          "radial-gradient(ellipse 60% 40% at 50% -20%, rgba(112, 157, 119, 0.18), transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up-slow": "fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s ease both",
        "marquee": "marquee-scroll 30s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "float": "float 5s ease-in-out infinite",
        "scan": "scan 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
