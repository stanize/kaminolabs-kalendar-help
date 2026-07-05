import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4f46e5",
          weak: "#eef2ff",
          strong: "#4338ca",
        },
        ink: {
          DEFAULT: "#1c1c24",
          soft: "#6b6b7b",
        },
        surface: "#ffffff",
        canvas: "#fafafa",
        line: "#e6e6ec",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#1c1c24",
            "--tw-prose-headings": "#1c1c24",
            "--tw-prose-links": "#4f46e5",
            "--tw-prose-bold": "#1c1c24",
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
