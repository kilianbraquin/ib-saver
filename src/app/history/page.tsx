import { Metadata } from "next";
import dynamic from "next/dynamic";

const HistoryTemplate = dynamic(() => import("@/components/HistoryTemplate"), {
  ssr: false,
});

export default function Page() {
  return <HistoryTemplate />;
}

export const metadata: Metadata = {
  robots: {
    index: false,
  },
  alternates: {
    canonical: "/history",
  },
};
