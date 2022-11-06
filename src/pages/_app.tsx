import { Layout } from "@/components/Layout";
import { SearchBarContext } from "@/contexts/SearchBarContext";
import { ThemeMode, ThemeModeContext } from "@/contexts/ThemeModeContext";
import { useThemeMode } from "@/hooks/useThemeMode";
import { tailwindColors } from "@/lib/tailwind/config";
import "@/styles/globals.css";
import * as Fathom from "fathom-client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
  const router = useRouter();
  const { themeMode, toggleThemeMode } = useThemeMode();
  const [searchBarValue, setSearchBarValue] = useState("");

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: [process.env.NEXT_PUBLIC_DOMAIN_NAME],
      url: process.env.NEXT_PUBLIC_FATHOM_SCRIPT_URL,
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>IndieBaie Studio</title>
        <meta
          name="theme-color"
          content={
            themeMode === ThemeMode.LIGHT
              ? tailwindColors["center-light"]
              : tailwindColors["center-dark"]
          }
        />
      </Head>
      <ThemeModeContext.Provider
        value={{
          themeMode: themeMode,
          toggleThemeMode: toggleThemeMode,
        }}
      >
        <SearchBarContext.Provider
          value={{
            searchBarValue: searchBarValue,
            setSearchBarValue: setSearchBarValue,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SearchBarContext.Provider>
      </ThemeModeContext.Provider>
    </>
  );
}

export default App;
