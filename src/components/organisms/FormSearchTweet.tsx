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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Lien de la vidéo"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};
