import CircleArrowRight from "@fontawesome/regular/circle-arrow-right.svg";
import { FC } from "react";

export const SearchBar: FC = () => {
  return (
    <form
      className="flex justify-between border-b p-4 border-border-light dark:border-border-dark"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="flex-1 bg-transparent pr-4 outline-none text-main-text-light dark:text-main-text-dark"
        placeholder="Rechercher un tweet"
      />
      <button>
        <CircleArrowRight className="fill-primary" height={26} />
      </button>
    </form>
  );
};
