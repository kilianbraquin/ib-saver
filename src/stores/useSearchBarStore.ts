import { create } from "zustand";

type State = {
  searchBarText: string;
};

type Action = {
  setSearchBarText: (text: string) => void;
  resetSearchBarText: () => void;
};

export const useSearchBarStore = create<State & Action>((set) => ({
  searchBarText: "",
  setSearchBarText: (text) => set(() => ({ searchBarText: text })),
  resetSearchBarText: () => set(() => ({ searchBarText: "" })),
}));
