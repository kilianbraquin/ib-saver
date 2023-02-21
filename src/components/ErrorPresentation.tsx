import LocationPinSlash from "@fontawesome/regular/location-pin-slash.svg";
import { FC } from "react";

export const ErrorPresentation: FC = () => {
  return (
    <div className="absolute left-1/2 flex h-full w-full -translate-x-1/2 items-center justify-center">
      <LocationPinSlash
        className="absolute z-0 fill-main-text-light opacity-5 dark:fill-main-text-dark"
        width={210}
      />
      <p className="ib-break-words z-10 inline-block p-4 text-center text-main-text-light dark:text-main-text-dark">
        {"Cette page n'a pas pu être trouvée"}
      </p>
    </div>
  );
};
