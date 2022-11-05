import { createContext } from "react";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeModeContextProps = {
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
};

export const ThemeModeContext = createContext<ThemeModeContextProps>({
  themeMode: ThemeMode.LIGHT,
  toggleThemeMode: () => null,
});
