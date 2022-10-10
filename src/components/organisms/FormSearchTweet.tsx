import { Box } from "@/components/atoms/Box";
import ChevronRight from "@/icons/chevron-right.svg";
import * as Fathom from "fathom-client";
import { FC, FormEventHandler, useCallback, useState } from "react";

export type FormSearchTweetProps = {
  onSubmit?: (tweetId: string) => void;
};

export const FormSearchTweet: FC<FormSearchTweetProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleOnSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      if (onSubmit) {
        try {
          const value = inputValue.trim();
          let tweetIdentifier: string;
          if (/^[0-9]+$/.test(inputValue)) tweetIdentifier = value;
          else {
            const url = new URL(value);
            tweetIdentifier = url.pathname.split("/").pop();
            if (!/^[0-9]+$/.test(tweetIdentifier)) {
              throw new Error("Incorrect link");
            }
          }
          Fathom.trackGoal("B7NFDGBI", 0);
          onSubmit(tweetIdentifier);
        } catch {
          alert("Vous avez entré un identifiant ou un lien incorrect");
        }
      }
    },
    [inputValue, onSubmit]
  );

  return (
    <Box className="absolute z-10 -bottom-8 left-4 w-full">
      <form className="flex items-center space-x-4" onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="border-b border-black flex-1 rounded-none"
          placeholder="Lien du tweet"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          required
        />
        <button
          type="submit"
          className="w-8 h-8 border border-black rounded-full"
        >
          <ChevronRight
            className="text-black mx-auto translate-x-px"
            width={24}
          />
        </button>
      </form>
    </Box>
  );
};
