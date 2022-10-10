import { Box } from "@/components/atoms/Box";
import ChevronRight from "@/icons/chevron-right.svg";
import * as Fathom from "fathom-client";
import { FC, FormEventHandler, useCallback, useState } from "react";

export const FormSearchTweet: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      Fathom.trackGoal("B7NFDGBI", 0);
      console.log(inputValue);
    },
    [inputValue]
  );

  return (
    <Box className="absolute z-10 -bottom-8 left-4 w-full">
      <form className="flex items-center space-x-4" onSubmit={onSubmit}>
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
