import { SearchBar } from "@/components/atoms/SearchBar";
import { ThemeMode, ThemeModeContext } from "@/contexts/ThemeModeContext";
import IBSaverIcon from "@/icons/ib-saver-logo.svg";
import Bookmark from "@fontawesome/regular/bookmark.svg";
import ClockRotateLeft from "@fontawesome/regular/clock-rotate-left.svg";
import Moon from "@fontawesome/regular/moon.svg";
import Sun from "@fontawesome/regular/sun.svg";
import Link from "next/link";
import { FC, PropsWithChildren, useContext, useMemo } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);

  const ThemeToggleIcon = useMemo(() => {
    if (themeMode === ThemeMode.DARK) return Sun;
    else return Moon;
  }, [themeMode]);
  return (
    <div className="bg-side-light dark:bg-side-dark">
      <div className="mx-auto min-h-screen max-w-2xl border-r border-l border-border-light bg-center-light pb-safe dark:bg-center-dark dark:border-border-dark">
        <header className="flex items-center justify-between border-b p-4 border-border-light dark:border-border-dark">
          <Link href={"/"}>
            <IBSaverIcon />
          </Link>
          <div className="flex space-x-4 items-center">
            <Link href="#">
              <ClockRotateLeft className="fill-primary" height={26} />
            </Link>
            <Link href="#">
              <Bookmark className="fill-primary" height={26} />
            </Link>
            <button onClick={toggleThemeMode}>
              <ThemeToggleIcon className="fill-primary" height={26} />
            </button>
          </div>
        </header>
        <SearchBar />
        <main>{children}</main>
      </div>
    </div>
  );
};
