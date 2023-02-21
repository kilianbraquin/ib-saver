import { useSearchBarStore } from "@/stores/useSearchBarStore";
import CircleArrowRight from "@fontawesome/regular/circle-arrow-right.svg";
import * as Fathom from "fathom-client";
import { useRouter } from "next/navigation";
import { FC, FormEventHandler, useCallback } from "react";

export const SearchBar: FC = () => {
  const searchBarText = useSearchBarStore((state) => state.searchBarText);
  const setSearchBarText = useSearchBarStore((state) => state.setSearchBarText);
  const router = useRouter();

  const handleOnSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      try {
        const value = searchBarText.trim();
        let tweetIdentifier: string;
        if (/^[0-9]+$/.test(searchBarText)) tweetIdentifier = value;
        else {
          const url = new URL(value);
          tweetIdentifier = url.pathname.split("/").pop() ?? "";
          if (!/^[0-9]+$/.test(tweetIdentifier)) {
            throw new Error("Incorrect link");
          }
        }
        Fathom.trackGoal("B7NFDGBI", 0);
        router.push("/?id=" + tweetIdentifier);
      } catch {
        alert("Vous avez entré un identifiant ou un lien incorrect");
      }
    },
    [router, searchBarText]
  );

  return (
    <form
      id="search-bar"
      className="flex justify-between border-b border-border-light p-4 dark:border-border-dark"
      onSubmit={handleOnSubmit}
    >
      <input
        id="search-bar-input"
        autoComplete="off"
        type="text"
        className="shadow-inner flex-1 bg-transparent pr-4 text-main-text-light outline-none dark:text-main-text-dark"
        placeholder="Rechercher un tweet"
        value={searchBarText}
        onChange={(e) => setSearchBarText(e.currentTarget.value)}
        required
      />
      <button>
        <CircleArrowRight className="fill-primary" height={26} />
      </button>
    </form>
  );
};
