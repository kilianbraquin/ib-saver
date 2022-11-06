import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center p-4 space-y-1 text-body-text-light dark:text-body-text-dark">
      <div>
        <Link className="font-bold text-primary cursor-not-allowed" href="#">
          English Version
        </Link>
      </div>
      <div>
        Crée par{" "}
        <Link
          className="font-bold text-primary"
          href="https://www.kbraquin.com/"
        >
          Kilian Braquin
        </Link>
      </div>
    </footer>
  );
};
