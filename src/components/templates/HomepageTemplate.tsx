import { Box } from "@/components/atoms/Box";
import { Title } from "@/components/atoms/Title";
import { FormSearchTweet } from "@/components/organisms/FormSearchTweet";
import { useTweetInfo } from "@/hooks/useTweetInfo";
import Link from "next/link";
import { FC } from "react";

export const HomepageTemplate: FC = () => {
  const { setTweetId } = useTweetInfo();

  return (
    <div className="container mx-auto flex flex-col items-center">
      <header className="py-4">
        <div className="font-extrabold text-2xl">IB Saver</div>
      </header>
      <main className="relative -translate-x-2 mb-16 max-w-full">
        <Box className="pb-12">
          <Title>Téléchargement de medias Twitter</Title>
          <p className="break-words">
            Bienvenue,
            <br />
            IB Saver est un service permettant de télécharger les médias d’un
            tweet.
            <br />
            Pour cela, vous devez indiquer le lien du tweet
            <br />
            <span className="text-darkGray">
              <b>https://twitter.com/Drebae_/status/1574454379901423618</b>
            </span>
            <br />
            ou son identifiant uniquement
            <br />
            <span className="text-darkGray">
              https://twitter.com/Drebae_/status/<b>1574454379901423618</b>
            </span>
            <br />
            <br />
            Bonne utilisation !
          </p>
        </Box>
        <FormSearchTweet onSubmit={setTweetId} />
      </main>
      <footer className="pb-safe">
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
