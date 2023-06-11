"use client";
import { FC, useEffect } from "react";
import * as FathomClient from "fathom-client";
import { usePathname } from "next/navigation";

export const Fathom: FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    FathomClient.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: [process.env.NEXT_PUBLIC_DOMAIN_NAME],
      honorDNT: true,
      auto: false,
    });
  }, []);

  useEffect(() => {
    if (pathname) FathomClient.trackPageview({ url: pathname });
  }, [pathname]);

  return null;
};
