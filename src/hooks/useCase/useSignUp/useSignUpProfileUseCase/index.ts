import { useContext } from "react";
import { createParentAccount } from "../../../../services";
import { useSignUpProfile } from "../../../domain/useSignUp";
import { SignUpContext } from "../../../../contexts/SignUpContext";

const useSignUpProfileUseCase = () => {
  const { id, pw, phoneNum, onIncreasePageNum } = useContext(SignUpContext);
  const {
    state: { name, nameError },
    setState: { setName, setNameError },
  } = useSignUpProfile();

  const createParentAccountUseCase = () => {
    createParentAccount({
      id: id,
      pw: pw,
      name: name,
      phoneNumber: phoneNum,
    }).then(
      (res) => {
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
              case -101:
                alert("이미 사용하고 있는 전화번호입니다.");
                break;
              case -121:
                alert("인증되지 않은 번호입니다.");
                break;
              case -122:
                alert("이미 사용하고 있는 계정 ID입니다.");
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        setNameError(true);
        Promise.reject(err);
      }
    );
  };

  return {
    state: {
      name,
      nameError,
    },
    setState: {
      setName,
      setNameError,
    },
    useCase: {
      createParentAccountUseCase,
    },
  };
};

export default useSignUpProfileUseCase;
