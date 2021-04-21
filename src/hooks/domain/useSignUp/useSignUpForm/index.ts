import { useState } from "react";
import { IFormData, IFormError } from "./payload";

export const useSignUpForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    id: "",
    pw: "",
    pwConfirm: "",
  });
  const [formError, setFormError] = useState<IFormError>({
    idError: false,
    pwError: false,
    pwConfirmError: false,
  });

  return {
    state: {
      formData,
      formError,
    },
    setState: {
      setFormData,
      setFormError,
    },
  };
};
