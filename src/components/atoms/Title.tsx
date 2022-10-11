import { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="text-xl font-bold mb-3">{children}</h1>;
};

export const SubTitle: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="text-lg font-bold mb-2">{children}</h2>;
};
