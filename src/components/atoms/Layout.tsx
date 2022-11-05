import { Footer } from "@/components/atoms/Footer";
import { Header } from "@/components/atoms/Header";
import { SearchBar } from "@/components/atoms/SearchBar";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-side-light dark:bg-side-dark">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col border-border-light bg-center-light pb-safe dark:bg-center-dark dark:border-border-dark md:border-r md:border-l">
        <Header />
        <SearchBar />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
