import { AppPresentation } from "@/components/AppPresentation";
import { TweetPresentation } from "@/components/TweetPresentation";
import { useSearchBarStore } from "@/stores/useSearchBarStore";
import { useUserJourneyStore } from "@/stores/useUserJourneyStore";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useMemo } from "react";

export const HomepageTemplate: FC = () => {
  const addToHistory = useUserJourneyStore((state) => state.addToHistory);
  const resetSearchBarText = useSearchBarStore(
    (state) => state.resetSearchBarText
  );
  const searchParams = useSearchParams();
  const tweetId = useMemo(() => {
    const tweetId = searchParams.get("id");
    if (!tweetId || tweetId.length === 0) return null;
    else return tweetId;
  }, [searchParams]);

  useEffect(() => {
    if (!tweetId) resetSearchBarText();
    else {
      addToHistory(tweetId);
    }
  }, [resetSearchBarText, tweetId]);

  if (!tweetId) return <AppPresentation />;
  else return <TweetPresentation tweetId={tweetId} />;
};
