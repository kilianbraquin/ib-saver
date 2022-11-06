import { AppPresentation } from "@/components/AppPresentation";
import { TweetPresentation } from "@/components/TweetPresentation";
import { SearchBarContext } from "@/contexts/SearchBarContext";
import { useTweetInfo } from "@/hooks/useTweetInfo";
import { useSearchParams } from "next/navigation";
import { FC, useContext, useEffect } from "react";

export const HomepageTemplate: FC = () => {
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

  if (!tweetInfo) return <AppPresentation />;
  else return <TweetPresentation tweetInfo={tweetInfo} />;
};
