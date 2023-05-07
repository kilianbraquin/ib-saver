"use client";
import { FC, useEffect } from "react";
import { useUserJourneyStore } from "@/stores/useUserJourneyStore";

export const Zustand: FC = () => {
  useEffect(() => {
    const storageEventCallback = (e: StorageEvent) => {
      if (e.key === useUserJourneyStore.persist.getOptions().name) {
        useUserJourneyStore.persist.rehydrate();
      }
    };

    window.addEventListener("storage", storageEventCallback);
    return () => {
      window.removeEventListener("storage", storageEventCallback);
    };
  }, []);

  return null;
};
