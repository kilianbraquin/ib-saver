import { CustomHead } from "@/components/CustomHead";
import { Layout } from "@/components/Layout";
import { SearchBarContext } from "@/contexts/SearchBarContext";
import "@/styles/globals.css";
import * as Fathom from "fathom-client";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
  const router = useRouter();
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
    <ThemeProvider attribute="class">
      <SearchBarContext.Provider
        value={{
          searchBarValue: searchBarValue,
          setSearchBarValue: setSearchBarValue,
        }}
      >
        <CustomHead />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchBarContext.Provider>
    </ThemeProvider>
  );
}

export default App;
