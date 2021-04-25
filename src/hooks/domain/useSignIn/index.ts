import { useState } from "react";
import { ISignInError, ISignInForm } from "./payload";

export const useSignIn = () => {
  const [signInForm, setSignInForm] = useState<ISignInForm>({
    id: "",
    pw: "",
  });
  const [signInIdError, setSignInIdError] = useState<boolean>(false);
  const [signInPwError, setSignInPwError] = useState<boolean>(false);

  return {
    state: { signInForm, signInIdError, signInPwError },
    setState: { setSignInForm, setSignInIdError, setSignInPwError },
  };
};
