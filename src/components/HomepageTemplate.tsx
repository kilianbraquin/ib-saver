import { AppPresentation } from "@/components/AppPresentation";
import { TweetPresentation } from "@/components/TweetPresentation";
import { useTweetInfo } from "@/hooks/useTweetInfo";
import { useSearchBarStore } from "@/stores/useSearchBarStore";
import { useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";

export const HomepageTemplate: FC = () => {
  const resetSearchBarText = useSearchBarStore(
    (state) => state.resetSearchBarText
  );
  const { tweetInfo, setTweetId, resetTweetId } = useTweetInfo();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tweetId = searchParams.get("id");
    if (!tweetId || tweetId.length === 0) {
      resetSearchBarText();
      resetTweetId();
    } else {
      setTweetId(tweetId);
    }
  }, [resetTweetId, searchParams, resetSearchBarText, setTweetId]);

  if (!tweetInfo) return <AppPresentation />;
  else return <TweetPresentation tweetInfo={tweetInfo} />;
};
