import Moon from "@fontawesome/regular/moon.svg";
import Sun from "@fontawesome/regular/sun.svg";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

export const ThemeIcon: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-[26px] h-[26px]" />;
  else if (resolvedTheme === "dark")
    return <Sun className="fill-primary" height={26} />;
  else return <Moon className="fill-primary" height={26} />;
};
