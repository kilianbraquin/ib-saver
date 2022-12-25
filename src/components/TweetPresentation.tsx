import { MediaInfo } from "@/components/MediaInfo";
import { useUserJourneyStore } from "@/stores/useUserJourneyStore";
import { TweetInfo } from "@/types/twitter";
import SpinnerThird from "@fontawesome/duotone/spinner-third.svg";
import BookmarkRegular from "@fontawesome/regular/bookmark.svg";
import TrashCanClock from "@fontawesome/regular/trash-can-clock.svg";
import BadgeCheck from "@fontawesome/solid/badge-check.svg";
import BookmarkSolid from "@fontawesome/solid/bookmark.svg";
import * as Fathom from "fathom-client";
import Image from "next/image";
import Link from "next/link";
import { FC, useMemo } from "react";
import useSWRImmutable from "swr/immutable";

export type TweetPresentationProps = {
  tweetId: string;
  displayRemoveFromHistory?: boolean;
};

export const TweetPresentation: FC<TweetPresentationProps> = ({
  tweetId,
  displayRemoveFromHistory = false,
}) => {
  const removeFromHistory = useUserJourneyStore(
    (state) => state.removeFromHistory
  );
  const toggleBookmark = useUserJourneyStore((state) => state.toggleBookmark);
  const bookmarks = useUserJourneyStore((state) => state.bookmarks);

  const {
    data: tweetInfo,
    isLoading,
    error,
  } = useSWRImmutable<TweetInfo>(
    tweetId ? ["tweet", tweetId] : null,
    () =>
      fetch(process.env.NEXT_PUBLIC_WORKER_URL + "?tweetId=" + tweetId).then(
        (res) => {
          Fathom.trackGoal("IZGPT0ZD", 0);
          return res.json();
        }
      ),
    { shouldRetryOnError: false }
  );

  const bookmarkStatus = useMemo(
    () => bookmarks.includes(tweetId),
    [bookmarks, tweetId]
  );

  const userProfileUrl = useMemo(() => {
    if (tweetInfo) return `https://twitter.com/${tweetInfo.user.username}`;
    else return "#";
  }, [tweetInfo]);

  if (isLoading)
    return (
      <div className="relative flex justify-center py-16">
        <SpinnerThird
          className="animate-spin opacity-50 fill-main-text-light dark:fill-primary"
          width={210}
        />
      </div>
    );
  else if (!tweetInfo || error)
    return (
      <div className="p-8">
        <p className="text-center text-main-text-light dark:text-main-text-dark font-medium">
          {"Ce tweet n'existe pas"}
        </p>
      </div>
    );
  else
    return (
      <>
        <div className="flex items-center justify-between gap-x-2 p-4">
          <div className="flex gap-x-4">
            <Link href={userProfileUrl} target="_blank">
              <Image
                className="self-start rounded-full"
                src={tweetInfo.user.profile_image_url}
                alt="profile image url"
                height={48}
                width={48}
              />
            </Link>
            <div>
              <div className="font-bold text-main-text-light hover:underline dark:text-main-text-dark">
                <Link href={userProfileUrl} target="_blank">
                  {tweetInfo.user.name}
                  {tweetInfo.user.verified && (
                    <BadgeCheck
                      className="ml-1 inline -translate-y-px fill-primary"
                      width={18}
                    />
                  )}
                </Link>
              </div>
              <div className="text-body-text-light dark:text-body-text-dark">
                <Link href={userProfileUrl} target="_blank">
                  @{tweetInfo.user.username}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            {displayRemoveFromHistory && (
              <button onClick={() => removeFromHistory(tweetInfo.id)}>
                <TrashCanClock className="fill-primary" height={26} />
              </button>
            )}
            <button onClick={() => toggleBookmark(tweetInfo.id)}>
              {bookmarkStatus ? (
                <BookmarkSolid className="fill-primary" height={26} />
              ) : (
                <BookmarkRegular className="fill-primary" height={26} />
              )}
            </button>
          </div>
        </div>
        <div className="px-4">
          <p className="text-body-text-light dark:text-body-text-dark">
            {tweetInfo.text}
          </p>
        </div>
        {tweetInfo.media.length !== 0 ? (
          <ul className="flex flex-wrap items-start gap-y-4 p-4">
            {tweetInfo.media.map((media) => (
              <li className="w-full md:w-1/2" key={media.media_key}>
                <MediaInfo media={media} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="h-4" />
        )}
      </>
    );
};
