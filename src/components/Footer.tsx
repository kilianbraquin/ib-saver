import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center space-y-1 p-4 text-body-text-light dark:text-body-text-dark">
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
