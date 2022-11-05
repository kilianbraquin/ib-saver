import { MediaInfo } from "@/components/molecules/MediaInfo";
import { useTweetBookmarks } from "@/hooks/useTweetBookmarks";
import { useTweetHistory } from "@/hooks/useTweetHistory";
import { TweetInfo } from "@/hooks/useTweetInfo";
import BookmarkRegular from "@fontawesome/regular/bookmark.svg";
import TrashCanClock from "@fontawesome/regular/trash-can-clock.svg";
import BadgeCheck from "@fontawesome/solid/badge-check.svg";
import BookmarkSolid from "@fontawesome/solid/bookmark.svg";
import Image from "next/image";
import Link from "next/link";
import { FC, useCallback, useEffect, useMemo, useState } from "react";

export type TweetPresentationProps = {
  tweetInfo: TweetInfo;
  displayRemoveFromHistory?: boolean;
  onRemoveFromHistory?: (tweetId) => void;
  onToggleBookmark?: (tweetId) => void;
};

export const TweetPresentation: FC<TweetPresentationProps> = ({
  tweetInfo,
  displayRemoveFromHistory = false,
  onRemoveFromHistory,
  onToggleBookmark,
}) => {
  const { isBookmarked, toggleBookmark } = useTweetBookmarks();
  const { removeFromHistory } = useTweetHistory();

  const [bookmarkStatus, setBookmarkStatus] = useState(false);
  const userProfileUrl = useMemo(
    () => `https://twitter.com/${tweetInfo.user.username}`,
    [tweetInfo]
  );

  const refreshBookmarkStatus = useCallback(() => {
    setBookmarkStatus(isBookmarked(tweetInfo.id));
  }, [isBookmarked, tweetInfo.id]);

  useEffect(() => refreshBookmarkStatus(), [refreshBookmarkStatus]);

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
            <button
              onClick={() => {
                removeFromHistory(tweetInfo.id);
                if (onRemoveFromHistory) onRemoveFromHistory(tweetInfo.id);
              }}
            >
              <TrashCanClock className="fill-primary" height={26} />
            </button>
          )}
          <button
            onClick={() => {
              toggleBookmark(tweetInfo.id);
              refreshBookmarkStatus();
              if (onToggleBookmark) onToggleBookmark(tweetInfo.id);
            }}
          >
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
