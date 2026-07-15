"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const storageKey = "theme";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  window.dispatchEvent(new Event("themechange"));
}

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleThemeChange = () => callback();
  const handleSystemThemeChange = () => {
    if (window.localStorage.getItem(storageKey)) {
      callback();
      return;
    }

    applyTheme(getSystemTheme());
  };

  window.addEventListener("themechange", handleThemeChange);
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener("themechange", handleThemeChange);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => "light");

  const nextTheme = theme === "dark" ? "light" : "dark";
  const icon = theme === "dark" ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />;
  const buttonLabel = `Switch to ${nextTheme} mode`;

  return (
    <button
      type="button"
      onClick={() => {
        const selectedTheme = nextTheme;
        window.localStorage.setItem(storageKey, selectedTheme);
        applyTheme(selectedTheme);
      }}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-accent/30",
        className,
      )}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      {icon}
      <span className="sr-only">{buttonLabel}</span>
    </button>
  );
}
