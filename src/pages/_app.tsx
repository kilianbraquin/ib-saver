import { CustomHead } from "@/components/CustomHead";
import { Layout } from "@/components/Layout";
import { useUserJourneyStore } from "@/stores/useUserJourneyStore";
import "@/styles/globals.css";
import * as Fathom from "fathom-client";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { FC, useEffect } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const pathname = usePathname();

  useEffect(() => {
    const storageEventCallback = (e: StorageEvent) => {
      if (e.key === useUserJourneyStore.persist.getOptions().name) {
        useUserJourneyStore.persist.rehydrate();
      }
    };

    window.addEventListener("storage", storageEventCallback);
    return () => {
      window.removeEventListener("storage", storageEventCallback);
    };
  }, []);

  useEffect(() => {
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: [process.env.NEXT_PUBLIC_DOMAIN_NAME],
      url: process.env.NEXT_PUBLIC_FATHOM_SCRIPT_URL,
      honorDNT: true,
      auto: false,
    });
  }, []);

  useEffect(() => {
    if (pathname) Fathom.trackPageview({ url: pathname });
  }, [pathname]);

  return (
    <ThemeProvider attribute="class">
      <CustomHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
