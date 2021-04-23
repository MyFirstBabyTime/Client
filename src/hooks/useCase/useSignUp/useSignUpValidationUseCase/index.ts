import { useContext } from "react";
import { sendCertifyCode, getCertification } from "../../../../services";
import { useSignUpValidation } from "../../../domain/useSignUp";
import { SignUpContext } from "../../../../contexts/SignUpContext";

const useSignUpValidationUseCase = () => {
  const { onIncreasePageNum, setContextPhoneNum } = useContext(SignUpContext);
  const {
    state: { isSentCertifyCode, validationData, validationError },
    setState: { setIsSentCertifyCode, setValidationData, setValidationError },
  } = useSignUpValidation();

  const sendCertifyCodeUseCase = async () => {
    await sendCertifyCode(validationData.phoneNumber).then(
      (res) => {
        setIsSentCertifyCode(true);
        Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 400:
            alert("올바르지 않은 전화번호 형식입니다.");
            break;
          case 409:
            alert("이 전화번호로 가입된 계정이 존재합니다.");
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
    await getCertification(validationData).then(
      (res) => {
        setContextPhoneNum(validationData.phoneNumber);
        onIncreasePageNum();
        Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 400:
            alert("올바르지 않은 형식입니다.");
            break;
          case 409:
            switch (err.response.data.code) {
              case -111:
                alert("이미 인증된 전화번호입니다.");
                break;
              case -112:
                alert("올바르지 않은 인증 코드입니다.");
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        setValidationError({
          ...validationError,
          certifyCodeError: true,
        });
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
