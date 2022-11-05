import { SearchBarContext } from "@/contexts/SearchBarContext";
import MagnifyingGlass from "@fontawesome/regular/magnifying-glass.svg";
import { useRouter } from "next/router";
import { FC, useContext } from "react";

export const AppPresentation: FC = () => {
  const { setSearchBarValue } = useContext(SearchBarContext);
  const router = useRouter();
  return (
    <div className="absolute left-1/2 flex h-full w-full -translate-x-1/2 items-center justify-center">
      <MagnifyingGlass
        className="absolute z-0 opacity-5 fill-main-text-light dark:fill-main-text-dark"
        width={210}
      />
      <p className="z-10 inline-block break-all p-4 text-main-text-light dark:text-main-text-dark">
        Recherchez un tweet avec son lien
        <br />
        <button
          className="font-bold text-primary text-start"
          onClick={() => {
            setSearchBarValue(
              "https://twitter.com/Drebae_/status/1574454379901423618"
            );
            router.push("/?id=" + "1574454379901423618");
          }}
        >
          https://twitter.com/Drebae_/status/1574454379901423618
        </button>
        <br />
        Ou son identifiant uniquement
        <br />
        https://twitter.com/Drebae_/status/
        <button
          className="font-bold text-primary text-start"
          onClick={() => {
            setSearchBarValue("1574454379901423618");
            router.push("/?id=" + "1574454379901423618");
          }}
        >
          1574454379901423618
        </button>
      </p>
    </div>
  );
};
