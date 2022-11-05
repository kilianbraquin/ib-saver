import { TweetInfo } from "@/hooks/useTweetInfo";
import LinkIcon from "@/icons/link.svg";
import Image from "next/image";
import Link from "next/link";
import { FC, useMemo } from "react";

const defaultLabel = "Qualité normale";
const labels = ["Qualité faible", "Qualité moyenne", "Qualité haute"];

export type MediaInfoProps = {
  media: TweetInfo["media"][number];
};

export const MediaInfo: FC<MediaInfoProps> = ({ media }) => {
  const clearedVariants = useMemo(
    () =>
      (media.variants ?? [])
        .filter((variant) => variant.content_type !== "application/x-mpegURL")
        .sort((a, b) => (a.bit_rate ?? 0) - (b.bit_rate ?? 0)),
    [media.variants]
  );
  if (media.type === "video")
    return (
      <div className="flex space-x-3">
        <div>
          <Image
            className="border-2 border-black rounded-md mb-1"
            src={media.preview_image_url}
            alt="media miniature"
            width={140}
            height={80}
            unoptimized
          />
          <div className="font-bold text-center">Vidéo</div>
        </div>
        <div>
          <ul>
            {clearedVariants.map((variant, index) => (
              <li key={variant.url}>
                <Link
                  className="text-primary font-bold hover:underline flex items-center space-x-1"
                  href={variant.url}
                  target="_blank"
                >
                  <LinkIcon width={20} />
                  <span>{labels[index]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  else if (media.type === "animated_gif")
    return (
      <div className="flex space-x-3">
        <div>
          <Image
            className="border-2 border-black rounded-md mb-1"
            src={media.preview_image_url}
            alt="media miniature"
            width={140}
            height={80}
            unoptimized
          />
          <div className="font-bold text-center">GIF Animé</div>
        </div>
        <div>
          <Link
            className="text-primary font-bold hover:underline flex items-center space-x-1"
            target="_blank"
            href={clearedVariants[0].url}
          >
            <LinkIcon width={20} />
            <span>{defaultLabel}</span>
          </Link>
        </div>
      </div>
    );
  else if (media.type === "photo")
    return (
      <div className="flex space-x-3">
        <div>
          <Image
            className="border-2 border-black rounded-md mb-1"
            src={media.url}
            alt="media miniature"
            width={140}
            height={80}
            unoptimized
          />
          <div className="font-bold text-center">Photo</div>
        </div>
        <div>
          <Link
            className="text-primary font-bold hover:underline flex items-center space-x-1"
            href={media.url}
            target="_blank"
          >
            <LinkIcon width={20} />
            <span>{defaultLabel}</span>
          </Link>
        </div>
      </div>
    );
  else return null;
};
