import { sendCertifyCode, getCertification } from "../../../../services";
import { useSignUpValidation } from "../../../domain/useSignUp";

const useSignUpValidationUseCase = () => {
  const {
    state: { isSentCertifyCode, validationData, validationError },
    setState: { setIsSentCertifyCode, setValidationData, setValidationError },
  } = useSignUpValidation();

  const sendCertifyCodeUseCase = async () => {
    await sendCertifyCode(validationData.phoneNumber).then(
      (res) => {
        setIsSentCertifyCode(true);
        setValidationError({
          phoneNumberError: false,
          certifyCodeError: false,
        });
        Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 400:
            window.alert("올바르지 않은 전화번호 형식입니다.");
            break;
          case 409:
            window.alert("이 전화번호로 가입된 계정이 존재합니다.");
            break;
          default:
            break;
        }
        setValidationError({
          ...validationError,
          phoneNumberError: true,
        });
        Promise.reject(err);
      }
    );
  };

  const getCertificationUseCase = async () => {
    await getCertification(
      validationData.phoneNumber,
      validationData.certifyCode
    ).then(
      (res) => {
        Promise.resolve(res);
      },
      (err) => {
        Promise.reject(err);
      }
    );
  };

  return {
    state: { isSentCertifyCode, validationData, validationError },
    setState: { setIsSentCertifyCode, setValidationData, setValidationError },
    useCase: {
      sendCertifyCodeUseCase,
      getCertificationUseCase,
    },
  };
};

export default useSignUpValidationUseCase;
