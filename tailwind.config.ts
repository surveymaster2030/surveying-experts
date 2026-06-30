import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "se-blue": "#354f61",
        "se-blue-dark": "#243949",
        "se-blue-darker": "#1a2b38",
        "se-blue-light": "#4a6a7e",
        "se-blue-soft": "#eef2f4",
        "se-yellow": "#f6ba3b",
        "se-yellow-dark": "#e0a520",
        "se-yellow-light": "#fcd06a",
        "se-yellow-soft": "#fdf3dd",
        "se-teal": "#22A7A8",
        "se-teal-soft": "#e6f7f7",
        "se-gray-50": "#f8f9fa",
        "se-gray-100": "#f0f2f4",
        "se-gray-200": "#e5e8eb",
        "se-gray-300": "#d2d7dc",
        "se-gray-400": "#9aa4ac",
        "se-gray-500": "#6b757d",
        "se-gray-600": "#4b555c",
        "se-gray-700": "#364046",
        "se-gray-800": "#232a2f",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        serif: ["IBM Plex Serif", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(36,57,73,0.06)",
        sm: "0 1px 3px rgba(36,57,73,0.08), 0 1px 2px rgba(36,57,73,0.04)",
        md: "0 4px 12px rgba(36,57,73,0.08), 0 2px 4px rgba(36,57,73,0.04)",
        lg: "0 12px 28px rgba(36,57,73,0.12), 0 4px 8px rgba(36,57,73,0.05)",
        xl: "0 24px 48px rgba(36,57,73,0.16)",
        accent: "0 8px 24px rgba(246,186,59,0.32)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(53,79,97,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(53,79,97,0.05) 1px, transparent 1px)",
        "grid-pattern-dark":
          "linear-gradient(rgba(246,186,59,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(246,186,59,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
