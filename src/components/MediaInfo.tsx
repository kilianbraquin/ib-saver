import { TweetInfo } from "@/types/twitter";
import Download from "@fontawesome/regular/download.svg";
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
        {media.preview_image_url && (
          <Image
            className="self-stretch rounded-md border-2 border-border-light dark:border-border-dark"
            src={media.preview_image_url}
            alt="media miniature"
            width={140}
            height={80}
            unoptimized
          />
        )}
        <div>
          <div className="mb-0.5 font-bold text-main-text-light dark:text-main-text-dark">
            Vidéo
          </div>
          <ul className="space-y-px">
            {clearedVariants.map((variant, index) => (
              <li key={variant.url}>
                <Link
                  className="flex items-center space-x-1 font-bold text-primary hover:underline"
                  href={variant.url}
                  target="_blank"
                >
                  <Download className="fill-primary" width={18} />
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
        {media.preview_image_url && (
          <Image
            className="self-stretch rounded-md border-2 border-border-light dark:border-border-dark"
            src={media.preview_image_url}
            alt="media miniature"
            width={140}
            height={80}
            unoptimized
          />
        )}
        <div>
          <div className="mb-0.5 font-bold text-main-text-light dark:text-main-text-dark">
            GIF Animé
          </div>
          <Link
            className="flex items-center space-x-1 font-bold text-primary hover:underline"
            target="_blank"
            href={clearedVariants[0].url}
          >
            <Download className="fill-primary" width={18} />
            <span>{defaultLabel}</span>
          </Link>
        </div>
      </div>
    );
  else if (media.type === "photo")
    return (
      <div className="flex space-x-3">
        <Image
          className="self-stretch rounded-md border-2 border-border-light dark:border-border-dark"
          src={media.url ?? "#"}
          alt="media miniature"
          width={140}
          height={80}
          unoptimized
        />
        <div>
          <div className="mb-0.5 font-bold text-main-text-light dark:text-main-text-dark">
            Photo
          </div>
          <Link
            className="flex items-center space-x-1 font-bold text-primary hover:underline"
            href={media.url ?? "#"}
            target="_blank"
          >
            <Download className="fill-primary" width={18} />
            <span>{defaultLabel}</span>
          </Link>
        </div>
      </div>
    );
  else return null;
};
