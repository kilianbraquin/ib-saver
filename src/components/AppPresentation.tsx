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
        className="absolute z-0 fill-main-text-light opacity-5 dark:fill-main-text-dark"
        width={210}
      />
      <p className="ib-break-words z-10 inline-block p-4 text-main-text-light dark:text-main-text-dark">
        <span className="font-bold text-danger-text">
          {
            "Depuis les changements d'API de Twitter, l'application n'est plus fonctionnelle."
          }
        </span>
        <br />
        Recherchez un tweet avec son lien
        <br />
        <button
          className="text-start font-bold text-primary"
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
          className="text-start font-bold text-primary"
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
