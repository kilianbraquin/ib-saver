import { Box } from "@/components/atoms/Box";
import { Title } from "@/components/atoms/Title";
import { FormSearchTweet } from "@/components/organisms/FormSearchTweet";
import Link from "next/link";
import { FC } from "react";

export const HomepageTemplate: FC = () => {
  return (
    <div className="container mx-auto flex flex-col items-center pb-safe bg-blue">
      <header className="py-4">
        <div className="font-extrabold text-2xl">IB Saver</div>
      </header>
      <main className="relative mr-4 mb-16">
        <Box className="pb-12">
          <Title>Téléchargement de vidéos Twitter</Title>
          <p className="whitespace-normal">
            Bienvenue,
            <br />
            IB Saver est un service permettant de télécharger les vidéos d’un
            tweet.
            <br />
            Pour cela, vous devez indiquer le lien du tweet
            <br />
            <span className="text-darkGray">
              <b>https://twitter.com/lnstantFoot/status/ 1575981122747781120</b>
            </span>
            <br />
            ou son identifiant uniquement
            <br />
            <span className="text-darkGray">
              https://twitter.com/lnstantFoot/status/ <b>1575981122747781120</b>
            </span>
            <br />
            <br />
            Bonne utilisation !
          </p>
        </Box>
        <FormSearchTweet />
      </main>
      <footer>
        <p>
          Made by{" "}
          <Link href="#">
            <a className="font-bold">Kilian Braquin</a>
          </Link>
        </p>
      </footer>
    </div>
  );
};
