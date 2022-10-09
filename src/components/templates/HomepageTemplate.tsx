import { FormSearchTweet } from "@/components/organisms/FormSearchTweet";
import Link from "next/link";
import { FC } from "react";

export const HomepageTemplate: FC = () => {
  return (
    <>
      <header>
        <div>IB Saver</div>
      </header>
      <h1>Téléchargement de vidéos Twitter</h1>
      <p>
        Bienvenue,
        <br />
        IB Saver est un service permettant de télécharger les vidéos d’un tweet.
        <br />
        Pour cela, vous devez indiquer le lien du tweet
        <br />(<b>https://twitter.com/lnstantFoot/status/1575981122747781120</b>
        )<br />
        ou son identifiant uniquement
        <br />
        (https://twitter.com/lnstantFoot/status/
        <b>1575981122747781120</b>).
        <br />
        <br />
        Bonne utilisation !
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
