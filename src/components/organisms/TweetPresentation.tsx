import { SubTitle, Title } from "@/components/atoms/Title";
import { MediaInfo } from "@/components/molecules/MediaInfo";
import { TweetInfo } from "@/hooks/useTweetInfo";
import Link from "next/link";
import { FC, useMemo } from "react";

export type TweetPresentationProps = {
  tweetInfo: TweetInfo;
};

export const TweetPresentation: FC<TweetPresentationProps> = ({
  tweetInfo,
}) => {
  const timeString = useMemo(
    () =>
      new Date(tweetInfo.date).toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [tweetInfo.date]
  );
  const dateString = useMemo(
    () =>
      new Date(tweetInfo.date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    [tweetInfo.date]
  );

  return (
    <>
      <Title>Informations du tweet</Title>
      <ul className="mb-3 space-y-1">
        <li className="flex justify-between">
          <div className="font-bold">Auteur</div>
          <div>
            <Link
              className="text-primary font-bold"
              href={`https://twitter.com/${tweetInfo.author}`}
              target="_blank"
            >
              {`@${tweetInfo.author}`}
            </Link>
          </div>
        </li>
        <li className="flex justify-between">
          <div className="font-bold">Date</div>
          <div>
            <Link href="#">
              <time
                dateTime={tweetInfo.date}
              >{`${timeString} · ${dateString}`}</time>
            </Link>
          </div>
        </li>
        <li>
          <div className="font-bold">Texte</div>
          <div>
            <Link href="#">
              <p>{tweetInfo.text}</p>
            </Link>
          </div>
        </li>
      </ul>
      <SubTitle>Medias du tweet</SubTitle>
      <ul className="space-y-2">
        {tweetInfo.media.map((media) => (
          <li key={media.media_key}>
            <MediaInfo media={media} />
          </li>
        ))}
      </ul>
    </>
  );
};
