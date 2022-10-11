import { Box } from "@/components/atoms/Box";
import { AppPresentation } from "@/components/organisms/AppPresentation";
import { FormSearchTweet } from "@/components/organisms/FormSearchTweet";
import { TweetPresentation } from "@/components/organisms/TweetPresentation";
import { useTweetInfo } from "@/hooks/useTweetInfo";
import Link from "next/link";
import { FC } from "react";

export type HomepageTemplateProps = {
  title: string;
  introduction: string;
};

export const HomepageTemplate: FC<HomepageTemplateProps> = ({
  title,
  introduction,
}) => {
  const { tweetInfo, setTweetId } = useTweetInfo();

  return (
    <div className="container mx-auto flex flex-col items-center">
      <header className="py-4">
        <div className="text-4xl font-logo">IB Saver</div>
      </header>
      <main className="relative -translate-x-2 mb-16 w-full min-w-[288px] max-w-lg">
        <Box className="pb-12">
          {!tweetInfo ? (
            <AppPresentation title={title} introduction={introduction} />
          ) : (
            <TweetPresentation tweetInfo={tweetInfo} />
          )}
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
