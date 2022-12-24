import { useSearchBarStore } from "@/stores/useSearchBarStore";
import MagnifyingGlass from "@fontawesome/regular/magnifying-glass.svg";
import { useRouter } from "next/navigation";
import { FC } from "react";

export const AppPresentation: FC = () => {
  const setSearchBarText = useSearchBarStore((state) => state.setSearchBarText);
  const router = useRouter();

  return (
    <div className="absolute left-1/2 flex h-full w-full -translate-x-1/2 items-center justify-center">
      <MagnifyingGlass
        className="absolute z-0 opacity-5 fill-main-text-light dark:fill-main-text-dark"
        width={210}
      />
      <p className="z-10 inline-block ib-break-words p-4 text-main-text-light dark:text-main-text-dark">
        Recherchez un tweet avec son lien
        <br />
        <button
          className="font-bold text-primary text-start"
          onClick={() => {
            setSearchBarText(
              "https://twitter.com/T1LoL/status/1588818401140539392"
            );
            router.push("/?id=" + "1588818401140539392");
          }}
        >
          https://twitter.com/T1LoL/status/1588818401140539392
        </button>
        <br />
        Ou son identifiant uniquement
        <br />
        https://twitter.com/T1LoL/status/
        <button
          className="font-bold text-primary text-start"
          onClick={() => {
            setSearchBarText("1588818401140539392");
            router.push("/?id=" + "1588818401140539392");
          }}
        >
          1588818401140539392
        </button>
      </p>
    </div>
  );
};
