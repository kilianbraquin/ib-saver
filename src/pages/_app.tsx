import * as Fathom from "fathom-client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  const router = useRouter();

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
      <Component {...pageProps} />
    </>
  );
}

export default App;
