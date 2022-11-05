import { ThemeMode } from "@/contexts/ThemeModeContext";
import { tailwindColors } from "@/lib/tailwind/config";
import { useCallback, useEffect, useState } from "react";

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(ThemeMode.LIGHT);

  useEffect(() => {
    if (
      localStorage.theme === ThemeMode.DARK ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setThemeMode(ThemeMode.DARK);
    } else {
      setThemeMode(ThemeMode.LIGHT);
    }
  }, []);

  useEffect(() => {
    if (themeMode === ThemeMode.DARK) {
      localStorage.theme = ThemeMode.DARK;
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor =
        tailwindColors["side-dark"];
    } else {
      localStorage.theme = ThemeMode.LIGHT;
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor =
        tailwindColors["side-light"];
    }
  }, [themeMode]);

  const toggleThemeMode = useCallback(() => {
    if (themeMode === ThemeMode.DARK) {
      setThemeMode(ThemeMode.LIGHT);
    } else {
      setThemeMode(ThemeMode.DARK);
    }
  }, [themeMode]);

  return {
    themeMode,
    toggleThemeMode,
  };
};
