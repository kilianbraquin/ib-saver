import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export type BoxProps = {
  className?: string;
};

export const Box: FC<PropsWithChildren<BoxProps>> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        className,
        "border-2 border-black rounded inline-block shadow-box max-w-sm p-4 bg-white"
      )}
    >
      {children}
    </div>
  );
};
