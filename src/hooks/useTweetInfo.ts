import { useTweetHistory } from "@/hooks/useTweetHistory";
import axios from "axios";
import * as Fathom from "fathom-client";
import { useCallback, useEffect, useState } from "react";

export type TweetInfo = {
  id: string;
  author: string;
  user: {
    name: string;
    username: string;
    profile_image_url: string;
    verified: boolean;
  };
  date: string;
  text: string;
  media: {
    type: "video" | "photo" | "animated_gif";
    media_key: string;
    url?: string;
    preview_image_url?: string;
    variants?: {
      bit_rate?: number;
      content_type: string; // application/x-mpegURL || video/mp4
      url: string;
    }[];
  }[];
};

export const useTweetInfo = () => {
  const { addToHistory } = useTweetHistory();
  const [tweetId, setTweetId] = useState<string>();
  const [tweetInfo, setTweetInfo] = useState<TweetInfo>();

  const resetTweetId = useCallback(() => {
    setTweetId(undefined);
  }, []);

  useEffect(() => {
    if (tweetId) {
      Fathom.trackGoal("IZGPT0ZD", 0);
      axios
        .get<TweetInfo>(process.env.NEXT_PUBLIC_WORKER_URL, {
          params: { tweetId },
        })
        .then((res) => setTweetInfo(res.data))
        .then(() => addToHistory(tweetId))
        .catch(() => setTweetInfo(undefined));
    } else {
      setTweetInfo(undefined);
    }
  }, [addToHistory, tweetId]);

  return {
    tweetId,
    tweetInfo,
    setTweetId,
    resetTweetId,
  };
};
