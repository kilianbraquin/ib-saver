import Bookmark from "@fontawesome/regular/bookmark.svg";
import { FC } from "react";

export const BookmarkPresentation: FC = () => {
  return (
    <div className="absolute left-1/2 flex h-full w-full -translate-x-1/2 items-center justify-center">
      <Bookmark
        className="absolute z-0 fill-main-text-light opacity-5 dark:fill-main-text-dark"
        width={210}
      />
      <p className="ib-break-words z-10 inline-block p-4 text-center text-main-text-light dark:text-main-text-dark">
        Votre liste de tweets sauvegardés est vide
      </p>
    </div>
  );
};
