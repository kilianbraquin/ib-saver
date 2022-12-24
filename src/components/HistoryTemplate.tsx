import { HistoryPresentation } from "@/components/HistoryPresentation";
import { TweetPresentation } from "@/components/TweetPresentation";
import { useTweetHistory } from "@/hooks/useTweetHistory";
import { TweetInfo } from "@/hooks/useTweetInfo";
import { useSearchBarStore } from "@/stores/useSearchBarStore";
import axios from "axios";
import { FC, useEffect, useRef, useState } from "react";

export const HistoryTemplate: FC = () => {
  const resetSearchBarText = useSearchBarStore(
    (state) => state.resetSearchBarText
  );
  const tweetHistoryInfoMemo = useRef<TweetInfo[]>([]);
  const [tweetHistoryInfo, setTweetHistoryInfo] = useState<TweetInfo[]>([]);
  const [tweetHistoryIds, setTweetHistoryIds] = useState<string[]>([]);
  const { getHistory } = useTweetHistory();

  useEffect(() => {
    resetSearchBarText();
  }, [resetSearchBarText]);

  useEffect(() => {
    setTweetHistoryIds(getHistory());
  }, [getHistory]);

  useEffect(() => {
    Promise.all(
      tweetHistoryIds.map((tweetId) => {
        const tweetMemo = tweetHistoryInfoMemo.current.find(
          (item) => item.id === tweetId
        );
        if (tweetMemo) return Promise.resolve(tweetMemo);
        else
          return axios
            .get<TweetInfo>(process.env.NEXT_PUBLIC_WORKER_URL, {
              params: { tweetId },
            })
            .then((res) => res.data)
            .catch(() => null);
      })
    ).then((items) => {
      setTweetHistoryInfo(items.filter((item) => Boolean(item)));
    });
  }, [tweetHistoryIds]);

  useEffect(() => {
    tweetHistoryInfoMemo.current = tweetHistoryInfo;
  }, [tweetHistoryInfo]);

  if (tweetHistoryIds.length === 0) return <HistoryPresentation />;
  else
    return (
      <ul>
        {tweetHistoryInfo.map((tweetInfo) => (
          <li
            key={tweetInfo.id}
            className="border-b border-border-light dark:border-border-dark"
          >
            <TweetPresentation
              tweetInfo={tweetInfo}
              displayRemoveFromHistory
              onRemoveFromHistory={(tweetId) =>
                setTweetHistoryIds((tweetHistoryInfo) =>
                  tweetHistoryInfo.filter((item) => item !== tweetId)
                )
              }
            />
          </li>
        ))}
      </ul>
    );
};
