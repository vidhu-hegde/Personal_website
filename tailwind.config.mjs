/** @type {import('tailwindcss').Config} */
const withOpacity = (variable) => `rgb(var(${variable}) / <alpha-value>)`;

const config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: withOpacity("--color-background"),
        foreground: withOpacity("--color-foreground"),
        muted: withOpacity("--color-muted"),
        border: withOpacity("--color-border"),
        card: withOpacity("--color-card"),
        divider: withOpacity("--color-divider"),
        accent: withOpacity("--color-accent"),
        "accent-soft": withOpacity("--color-accent-soft"),
        "accent-strong": withOpacity("--color-accent-strong"),
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
