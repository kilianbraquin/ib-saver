import { Box } from "@/components/atoms/Box";
import { Title } from "@/components/atoms/Title";
import { FormSearchTweet } from "@/components/organisms/FormSearchTweet";
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
  const { setTweetId } = useTweetInfo();

  return (
    <div className="container mx-auto flex flex-col items-center">
      <header className="py-4">
        <div className="font-extrabold text-2xl">IB Saver</div>
      </header>
      <main className="relative -translate-x-2 mb-16 max-w-full">
        <Box className="pb-12">
          <Title>{title}</Title>
          <div
            className="break-words"
            dangerouslySetInnerHTML={{ __html: introduction }}
          />
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
