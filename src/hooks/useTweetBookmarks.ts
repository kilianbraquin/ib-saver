import { useCallback } from "react";

export const useTweetBookmarks = () => {
  const getBookmarks = useCallback(() => {
    try {
      const bookmarkValue = JSON.parse(localStorage.getItem("bookmarks"));
      if (
        Array.isArray(bookmarkValue) &&
        bookmarkValue.every((e) => typeof e === "string")
      ) {
        return bookmarkValue as string[];
      } else {
        throw new Error();
      }
    } catch {
      localStorage.setItem("bookmarks", JSON.stringify([]));
      return [];
    }
  }, []);

  const isBookmarked = useCallback(
    (tweetId: string) => {
      const bookmarks = getBookmarks();
      return bookmarks.includes(tweetId);
    },
    [getBookmarks]
  );

  const toggleBookmark = useCallback(
    (value: string) => {
      if (isBookmarked(value)) {
        const newBookmarks = getBookmarks().filter((item) => item !== value);
        localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
        return newBookmarks;
      } else {
        const newBookmarks = getBookmarks();
        newBookmarks.unshift(value);
        localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
        return newBookmarks;
      }
    },
    [getBookmarks, isBookmarked]
  );

  return {
    getBookmarks,
    isBookmarked,
    toggleBookmark,
  };
};
