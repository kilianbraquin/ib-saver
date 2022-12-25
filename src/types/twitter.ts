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
