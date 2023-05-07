import { HomepageTemplate } from "@/components/HomepageTemplate";
import { Metadata } from "next";

export default function Page() {
  return <HomepageTemplate />;
}

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};
