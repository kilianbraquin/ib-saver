import { Title } from "@/components/atoms/Title";
import { FC } from "react";

export type AppPresentationProps = {
  title: string;
  introduction: string;
};

export const AppPresentation: FC<AppPresentationProps> = ({
  title,
  introduction,
}) => {
  return (
    <>
      <Title>{title}</Title>
      <div
        className="break-words"
        dangerouslySetInnerHTML={{ __html: introduction }}
      />
    </>
  );
};
