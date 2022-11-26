import { tailwindColors } from "@/lib/tailwind/config";
import { useTheme } from "next-themes";
import Head from "next/head";
import { FC, useEffect, useState } from "react";

export const CustomHead: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  else
    return (
      <Head>
        <meta
          name="theme-color"
          content={
            resolvedTheme === "dark"
              ? tailwindColors["center-dark"]
              : tailwindColors["center-light"]
          }
        />
      </Head>
    );
};
