import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0b0b0f",
          surface: "#18181b",
          muted: "#a1a1aa",
          orange: "#f97316",
          orangeDeep: "#ea580c"
        }
      },
      boxShadow: {
        glow: "0 0 24px rgba(249, 115, 22, 0.35)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp 700ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
