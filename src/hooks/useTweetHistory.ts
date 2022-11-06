import { useCallback } from "react";

export const useTweetHistory = () => {
  const getHistory = useCallback(() => {
    try {
      const historyValue = JSON.parse(localStorage.getItem("history"));
      if (
        Array.isArray(historyValue) &&
        historyValue.every((e) => typeof e === "string")
      ) {
        return historyValue as string[];
      } else {
        throw new Error();
      }
    } catch {
      localStorage.setItem("history", JSON.stringify([]));
      return [];
    }
  }, []);

  const addToHistory = useCallback(
    (value: string) => {
      const currentHistory = getHistory().filter((item) => item !== value);
      currentHistory.unshift(value);
      const newHistory = currentHistory.slice(0, 10);
      localStorage.setItem("history", JSON.stringify(newHistory));
      return newHistory;
    },
    [getHistory]
  );

  const removeFromHistory = useCallback(
    (value: string) => {
      const currentHistory = getHistory().filter((item) => item !== value);
      const newHistory = currentHistory.slice(0, 10);
      localStorage.setItem("history", JSON.stringify(newHistory));
      return newHistory;
    },
    [getHistory]
  );

  return {
    addToHistory,
    getHistory,
    removeFromHistory,
  };
};
