import { FC, FormEventHandler, useCallback, useState } from "react";

export const FormSearchTweet: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
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
