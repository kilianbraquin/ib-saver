import { BookmarkPresentation } from "@/components/organisms/BookmarkPresentation";
import { TweetPresentation } from "@/components/organisms/TweetPresentation";
import { SearchBarContext } from "@/contexts/SearchBarContext";
import { useTweetBookmarks } from "@/hooks/useTweetBookmarks";
import { TweetInfo } from "@/hooks/useTweetInfo";
import axios from "axios";
import { FC, useContext, useEffect, useRef, useState } from "react";

export const BookmarksTemplate: FC = () => {
  const { setSearchBarValue } = useContext(SearchBarContext);
  const tweetBookmarksInfoMemo = useRef<TweetInfo[]>([]);
  const [tweetBookmarksInfo, setTweetBookmarksInfo] = useState<TweetInfo[]>([]);
  const [tweetBookmarksIds, setTweetBookmarksIds] = useState<string[]>([]);
  const { getBookmarks } = useTweetBookmarks();

  useEffect(() => {
    setSearchBarValue("");
  }, [setSearchBarValue]);

  useEffect(() => {
    setTweetBookmarksIds(getBookmarks());
  }, [getBookmarks]);

  useEffect(() => {
    Promise.all(
      tweetBookmarksIds.map((tweetId) => {
        const tweetMemo = tweetBookmarksInfoMemo.current.find(
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
      setTweetBookmarksInfo(items.filter((item) => Boolean(item)));
    });
  }, [tweetBookmarksIds]);

  useEffect(() => {
    tweetBookmarksInfoMemo.current = tweetBookmarksInfo;
  }, [tweetBookmarksInfo]);

  if (tweetBookmarksIds.length === 0) return <BookmarkPresentation />;
  else
    return (
      <ul>
        {tweetBookmarksInfo.map((tweetInfo) => (
          <li
            key={tweetInfo.id}
            className="border-b border-border-light dark:border-border-dark"
          >
            <TweetPresentation
              tweetInfo={tweetInfo}
              onToggleBookmark={(tweetId) =>
                setTweetBookmarksIds((tweetBookmarksInfo) =>
                  tweetBookmarksInfo.filter((item) => item !== tweetId)
                )
              }
            />
          </li>
        ))}
      </ul>
    );
};