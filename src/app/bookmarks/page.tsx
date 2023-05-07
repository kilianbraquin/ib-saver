import { Metadata } from "next";
import dynamic from "next/dynamic";

const BookmarksTemplate = dynamic(
  () => import("@/components/BookmarksTemplate"),
  {
    ssr: false,
  }
);

export default function Page() {
  return <BookmarksTemplate />;
}

export const metadata: Metadata = {
  robots: {
    index: false,
  },
  alternates: {
    canonical: "/bookmarks",
  },
};
