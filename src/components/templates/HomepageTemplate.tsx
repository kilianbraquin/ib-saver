import { FormSearchTweet } from "@/components/organisms/FormSearchTweet";
import Link from "next/link";
import { FC } from "react";

export const HomepageTemplate: FC = () => {
  return (
    <>
      <header>
        <div>IB Saver</div>
      </header>
      <h1>Application de téléchargement de vidéos Twitter</h1>
      <p>
        IB Saver est une application permettant de télécharger des vidéos
        Twitter
      </p>
      <FormSearchTweet />
      <footer>
        <p>
          Made by{" "}
          <Link href="#">
            <a>Kilian Braquin</a>
          </Link>
        </p>
      </footer>
    </>
  );
};
