import { useState } from "react";

export const useSignUpProfile = () => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);

  return {
    state: {
      name,
      nameError,
    },
    setState: {
      setName,
      setNameError,
    },
  };
};
