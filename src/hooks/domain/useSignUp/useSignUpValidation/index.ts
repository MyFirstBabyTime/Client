import { useState } from "react";
import { IValidationData, IValidationError } from "./payload";

export const useSignUpValidation = () => {
  const [isSentCertifyCode, setIsSentCertifyCode] = useState<boolean>(false);
  const [validationData, setValidationData] = useState<IValidationData>({
    phoneNumber: "",
    certifyCode: "",
  });
  const [validationError, setValidationError] = useState<IValidationError>({
    phoneNumberError: false,
    certifyCodeError: false,
  });

  return {
    state: {
      isSentCertifyCode,
      validationData,
      validationError,
    },
    setState: {
      setIsSentCertifyCode,
      setValidationData,
      setValidationError,
    },
  };
};
