import ClockRotateLeft from "@fontawesome/regular/clock-rotate-left.svg";
import { FC } from "react";

export const HistoryPresentation: FC = () => {
  return (
    <div className="absolute left-1/2 flex h-full w-full -translate-x-1/2 items-center justify-center">
      <ClockRotateLeft
        className="absolute z-0 opacity-5 fill-main-text-light dark:fill-main-text-dark"
        width={210}
      />
      <p className="z-10 inline-block p-4 text-center ib-break-words text-main-text-light dark:text-main-text-dark">
        Votre historique de tweets recherchés est vide
      </p>
    </div>
  );
};
