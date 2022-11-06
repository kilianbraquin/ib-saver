import { createContext } from "react";

export type SearchBarContextProps = {
  searchBarValue: string;
  setSearchBarValue: (value: string) => void;
};

export const SearchBarContext = createContext<SearchBarContextProps>({
  searchBarValue: "",
  setSearchBarValue: () => null,
});
