import { useState } from "react";
import { IFormData } from "./payload";

export const useSignUpForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    id: "",
    pw: "",
    pwConfirm: "",
  });
  const [idError, setIdError] = useState<boolean>(false);
  const [pwError, setPwError] = useState<boolean>(false);
  const [pwConfirmError, setPwConfirmError] = useState<boolean>(false);

  return {
    state: {
      formData,
      idError,
      pwError,
      pwConfirmError,
    },
    setState: {
      setFormData,
      setIdError,
      setPwError,
      setPwConfirmError,
    },
  };
};
