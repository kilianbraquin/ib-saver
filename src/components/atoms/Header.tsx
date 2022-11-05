import { ThemeMode, ThemeModeContext } from "@/contexts/ThemeModeContext";
import IBSaverLogo from "@/icons/ib-saver-logo.svg";
import Bookmark from "@fontawesome/regular/bookmark.svg";
import ClockRotateLeft from "@fontawesome/regular/clock-rotate-left.svg";
import Moon from "@fontawesome/regular/moon.svg";
import Sun from "@fontawesome/regular/sun.svg";
import Link from "next/link";
import { FC, useContext, useMemo } from "react";

export const Header: FC = () => {
  const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);

  const ThemeToggleIcon = useMemo(() => {
    if (themeMode === ThemeMode.DARK) return Sun;
    else return Moon;
  }, [themeMode]);

  return (
    <header className="flex items-center justify-between border-b p-4 border-border-light dark:border-border-dark">
      <Link href={"/"}>
        <IBSaverLogo />
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
  );
};
