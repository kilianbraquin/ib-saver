import "@/styles/globals.css";
import { FC, PropsWithChildren } from "react";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { Header } from "@/components/Header";
import { NextThemeProvider } from "@/components/NextThemeProvider";
import { Fathom } from "@/components/Fathom";
import { Metadata } from "next";
import { tailwindColors } from "@/lib/tailwind/config";
import { Zustand } from "@/components/Zustand";

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="fr" suppressHydrationWarning>
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/cpr8zgo.css" />
    </head>
    <body>
      <NextThemeProvider>
        <Fathom />
        <Zustand />
        <div className="bg-side-light dark:bg-side-dark">
          <div className="pb-safe mx-auto flex min-h-screen max-w-3xl flex-col border-border-light bg-center-light dark:border-border-dark dark:bg-center-dark md:border-l md:border-r">
            <Header />
            <SearchBar />
            <main className="relative flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </NextThemeProvider>
    </body>
  </html>
);

export const metadata: Metadata = {
  title: "IB Saver - Téléchargement de médias Twitter",
  description:
    "Recherchez vos tweets préférés et téléchargez leurs médias (images, vidéos) en qualité optimale",
  metadataBase: new URL("https://www.ibsaver.com"),
  openGraph: {
    title: "IB Saver - Téléchargement de médias Twitter",
    description:
      "Recherchez vos tweets préférés et téléchargez leurs médias (images, vidéos) en qualité optimale",
    url: "https://www.ibsaver.com",
    siteName: "IB Saver",
    images: [
      {
        url: "https://www.ibsaver.com/images/ibsaver_illu.png",
        width: 1200,
        height: 630,
        alt: "IB Saver Logo",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "fr-FR",
  },
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: tailwindColors["primary"],
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: tailwindColors["center-dark"],
    },
  ],
  twitter: {
    site: "@ib_saver",
    card: "summary_large_image",
  },
};

export default RootLayout;
