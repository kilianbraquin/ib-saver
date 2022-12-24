import { useSearchBarStore } from "@/stores/useSearchBarStore";
import CircleArrowRight from "@fontawesome/regular/circle-arrow-right.svg";
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
          tweetIdentifier = url.pathname.split("/").pop();
          if (!/^[0-9]+$/.test(tweetIdentifier)) {
            throw new Error("Incorrect link");
          }
        }
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
      className="flex justify-between border-b p-4 border-border-light dark:border-border-dark"
      onSubmit={handleOnSubmit}
    >
      <input
        id="search-bar-input"
        autoComplete="off"
        type="text"
        className="flex-1 bg-transparent pr-4 outline-none text-main-text-light dark:text-main-text-dark shadow-inner"
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
