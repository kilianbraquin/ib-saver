"use client";
import { BookmarkPresentation } from "@/components/BookmarkPresentation";
import { TweetPresentation } from "@/components/TweetPresentation";
import { useSearchBarStore } from "@/stores/useSearchBarStore";
import { useUserJourneyStore } from "@/stores/useUserJourneyStore";
import { FC, useEffect } from "react";

export const BookmarksTemplate: FC = () => {
  const resetSearchBarText = useSearchBarStore(
    (state) => state.resetSearchBarText
  );
  const bookmarks = useUserJourneyStore((state) => state.bookmarks);

  useEffect(() => {
    resetSearchBarText();
  }, [resetSearchBarText]);

  if (bookmarks.length === 0) return <BookmarkPresentation />;
  else
    return (
      <ul>
        {bookmarks.map((tweetId) => (
          <li
            key={tweetId}
            className="border-b border-border-light dark:border-border-dark"
          >
            <TweetPresentation tweetId={tweetId} />
          </li>
        ))}
      </ul>
    );
};

export default BookmarksTemplate;
