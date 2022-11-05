import { AppPresentation } from "@/components/organisms/AppPresentation";
import { TweetPresentation } from "@/components/organisms/TweetPresentation";
import { SearchBarContext } from "@/contexts/SearchBarContext";
import { useTweetInfo } from "@/hooks/useTweetInfo";
import { useSearchParams } from "next/navigation";
import { FC, useContext, useEffect } from "react";

export type HomepageTemplateProps = {
  title: string;
  introduction: string;
};

export const HomepageTemplate: FC<HomepageTemplateProps> = ({
  title,
  introduction,
}) => {
  const { setSearchBarValue } = useContext(SearchBarContext);
  const { tweetInfo, setTweetId, resetTweetId } = useTweetInfo();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tweetId = searchParams.get("id");
    if (!tweetId || tweetId.length === 0) {
      setSearchBarValue("");
      resetTweetId();
    } else {
      setTweetId(tweetId);
    }
  }, [resetTweetId, searchParams, setSearchBarValue, setTweetId]);

  return (
    <>
      {!tweetInfo ? (
        <AppPresentation />
      ) : (
        <TweetPresentation tweetInfo={tweetInfo} />
      )}
    </>
  );
};
