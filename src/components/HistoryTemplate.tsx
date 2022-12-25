import { HistoryPresentation } from "@/components/HistoryPresentation";
import { TweetPresentation } from "@/components/TweetPresentation";
import { useSearchBarStore } from "@/stores/useSearchBarStore";
import { useUserJourneyStore } from "@/stores/useUserJourneyStore";
import { FC, useEffect } from "react";

export const HistoryTemplate: FC = () => {
  const resetSearchBarText = useSearchBarStore(
    (state) => state.resetSearchBarText
  );
  const tweetHistoryIds = useUserJourneyStore((state) => state.history);

  useEffect(() => {
    resetSearchBarText();
  }, [resetSearchBarText]);

  if (tweetHistoryIds.length === 0) return <HistoryPresentation />;
  else
    return (
      <ul>
        {tweetHistoryIds.map((tweetId) => (
          <li
            key={tweetId}
            className="border-b border-border-light dark:border-border-dark"
          >
            <TweetPresentation tweetId={tweetId} displayRemoveFromHistory />
          </li>
        ))}
      </ul>
    );
};
