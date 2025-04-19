"use client";

import React from "react";
import styles from "@/styles/tempcircle.module.scss";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark" | null>(null);

  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light" | "dark";
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(localTheme || (prefersDark ? "dark" : "light"));
  }, []);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  React.useEffect(() => {
    if (theme === null) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={styles.themeToggleContainer}>
      <input
        type="checkbox"
        name=""
        checked={theme === "dark"}
        onChange={handleToggle}
        className={styles.themeToggle}
      />
    </div>
  );
}
