"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== "sqlmate-theme") return;
    document.documentElement.dataset.theme = event.newValue === "light" || event.newValue === "dark"
      ? event.newValue
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener("sqlmate-theme-change", callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("sqlmate-theme-change", callback);
  };
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  const isDark = theme === "dark";

  function toggleTheme() {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("sqlmate-theme", next);
    } catch {
      // The switch still works for this visit when storage is unavailable.
    }
    window.dispatchEvent(new Event("sqlmate-theme-change"));
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} title={isDark ? "Switch to light theme" : "Switch to dark theme"}>
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
