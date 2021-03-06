import { useHistory } from "react-router";
import { MAIN } from "../../../navigation/CONSTANTS";
import { signIn } from "../../../services";
import { useSignIn } from "../../domain/useSignIn";

const useSignInUseCase = () => {
  const history = useHistory();
  const {
    state: { signInForm, signInIdError, signInPwError },
    setState: { setSignInForm, setSignInIdError, setSignInPwError },
  } = useSignIn();

  const signInUseCase = () => {
    signIn({ id: signInForm.id, pw: signInForm.pw }).then(
      (res) => {
        localStorage.setItem("uuid", res?.uuid ?? "");
        localStorage.setItem("token", res?.token ?? "");
        history.push(MAIN);
        Promise.resolve(res);
      },
      (err) => {
        switch (err.response.status) {
          case 400:
            alert("올바르지 않은 형식입니다.");
            break;
          case 409:
            switch (err.response.data.code) {
              case -131:
                alert("존재하지 않는 계정입니다.");
                setSignInIdError(true);
                setSignInPwError(true);
                break;
              case -132:
                alert("올바르지 않은 비밀번호입니다.");
                setSignInPwError(true);
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
        Promise.reject(err);
      }
    );
  };

  return {
    state: { signInForm, signInIdError, signInPwError },
    setState: { setSignInForm, setSignInIdError, setSignInPwError },
    useCase: { signInUseCase },
  };
};

export default useSignInUseCase;
