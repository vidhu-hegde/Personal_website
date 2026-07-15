/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        foreground: "#1A1A1A",
        muted: "#666D78",
        border: "#E7E5E4",
        card: "#FFFFFF",
        accent: "#5F6F87",
        "accent-soft": "#E9EEF5",
        "accent-strong": "#425166",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 10px 24px rgba(17, 24, 39, 0.04)",
        "card-hover": "0 18px 42px rgba(17, 24, 39, 0.08)",
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
};

export default config;
