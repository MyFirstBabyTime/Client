import { useContext } from "react";
import { SignUpContext } from "../../../../contexts/SignUpContext";
import { checkIdDuplication } from "../../../../services";
import { useSignUpForm } from "../../../domain/useSignUp/useSignUpForm";

const useSignUpFormUseCase = () => {
  const { onIncreasePageNum } = useContext(SignUpContext);
  const {
    state: { formData, idError, pwError, pwConfirmError },
    setState: { setFormData, setIdError, setPwError, setPwConfirmError },
  } = useSignUpForm();

  const checkIdDuplicationUseCase = () => {
    checkIdDuplication(formData.id).then(
      (res) => {
        alert("이미 사용중인 아이디입니다.");
        Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 400:
            alert("올바르지 않은 형식입니다.");
            break;
          case 404:
            onIncreasePageNum();
            break;
          default:
            break;
        }
        setIdError(true);
        Promise.reject(err);
      }
    );
  };

  return {
    state: { formData, idError, pwError, pwConfirmError },
    setState: { setFormData, setIdError, setPwError, setPwConfirmError },
    useCase: { checkIdDuplicationUseCase },
  };
};

export default useSignUpFormUseCase;
