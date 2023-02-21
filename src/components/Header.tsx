import { ThemeIcon } from "@/components/ThemeIcon";
import IBSaverLogo from "@/icons/ib-saver-logo.svg";
import Bookmark from "@fontawesome/regular/bookmark.svg";
import ClockRotateLeft from "@fontawesome/regular/clock-rotate-left.svg";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FC, useCallback } from "react";

export const Header: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleThemeMode = useCallback(() => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  }, [resolvedTheme, setTheme]);

  return (
    <header className="flex items-center justify-between border-b border-border-light p-4 dark:border-border-dark">
      <Link href={"/"}>
        <IBSaverLogo />
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/history">
          <ClockRotateLeft className="fill-primary" height={26} />
        </Link>
        <Link href="/bookmarks">
          <Bookmark className="fill-primary" height={26} />
        </Link>
        <button onClick={toggleThemeMode}>
          <ThemeIcon />
        </button>
      </div>
    </header>
  );
};
