import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export type TweetInfo = {
  id: string;
  author: string;
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
  const [tweetId, setTweetId] = useState<string>();
  const [tweetInfo, setTweetInfo] = useState<TweetInfo>();

  const resetTweetId = useCallback(() => {
    setTweetId(undefined);
  }, []);

  useEffect(() => {
    if (tweetId) {
      axios
        .get<TweetInfo>(process.env.NEXT_PUBLIC_WORKER_URL, {
          params: { tweetId },
        })
        .then((res) => setTweetInfo(res.data))
        .catch(() => setTweetInfo(undefined));
    } else {
      setTweetInfo(undefined);
    }
  }, [tweetId]);

  return {
    tweetId,
    tweetInfo,
    setTweetId,
    resetTweetId,
  };
};
