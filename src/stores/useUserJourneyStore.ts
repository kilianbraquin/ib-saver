import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  bookmarks: string[];
  history: string[];
};

type Action = {
  addBookmark: (tweetId: string) => void;
  addToHistory: (tweetId: string) => void;
  removeFromHistory: (tweetId: string) => void;
  removeBookmark: (tweetId: string) => void;
  toggleBookmark: (tweetId: string) => void;
};

export const useUserJourneyStore = create(
  persist<State & Action>(
    (set, get) => ({
      bookmarks: [],
      history: [],
      addBookmark: (tweetId) =>
        set((state) => {
          if (!get().bookmarks.includes(tweetId)) {
            return { bookmarks: [tweetId, ...state.bookmarks] };
          }
          return {};
        }),
      removeBookmark: (tweetId) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((bookmark) => bookmark !== tweetId),
        })),
      toggleBookmark: (tweetId) => {
        if (get().bookmarks.includes(tweetId)) {
          get().removeBookmark(tweetId);
        } else get().addBookmark(tweetId);
      },
      addToHistory: (tweetId) =>
        set((state) => ({
          history: [
            tweetId,
            ...state.history.filter((id) => id !== tweetId),
          ].slice(0, 30),
        })),
      removeFromHistory: (tweetId) =>
        set((state) => ({
          history: state.history.filter((id) => id !== tweetId),
        })),
    }),
    {
      name: "journey", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
  )
);
