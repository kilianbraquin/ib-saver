import { Layout } from "@/components/atoms/Layout";
import { ThemeModeContext } from "@/contexts/ThemeModeContext";
import { useThemeMode } from "@/hooks/useThemeMode";
import "@/styles/globals.css";
import * as Fathom from "fathom-client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  const router = useRouter();
  const { toggleThemeMode, themeMode } = useThemeMode();

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
      </Head>
      <ThemeModeContext.Provider
        value={{
          themeMode: themeMode,
          toggleThemeMode: toggleThemeMode,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeModeContext.Provider>
    </>
  );
}

export default App;
