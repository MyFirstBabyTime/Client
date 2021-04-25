import { ChangeEvent, FC } from "react";
import { Background } from "../../components/Authentication/Background";
import { SignInView } from "./SignInView";
import styled from "styled-components";
import useSignInUseCase from "../../hooks/useCase/useSignInUseCase";

const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const SignInConatiner: FC = () => {
  const {
    state: { signInForm, signInIdError, signInPwError },
    setState: { setSignInForm, setSignInIdError, setSignInPwError },
    useCase: { signInUseCase }
  } = useSignInUseCase();

  const onChangeSignInForm = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value
    })
  };

  const onClickSignInBtn = () => {
    console.log(1);
    if (callFormatCheckFuncs()) return;
    signInUseCase();
  }

  const callFormatCheckFuncs = (): boolean => {
    const isIdError = checkFormId(),
      isPwErorr = checkFormPw();

    return isIdError || isPwErorr;
  }

  const checkFormId = (): boolean => {
    if (signInForm.id.length < 4 || signInForm.id.length > 20) {
      setSignInIdError(true);
      return true;
    }
    setSignInIdError(false);
    return false;
  }

  const checkFormPw = (): boolean => {
    if (signInForm.pw.length < 6 || signInForm.pw.length > 20) {
      setSignInPwError(true);
      return true;
    }
    setSignInPwError(false);
    return false;
  }

  return (
    <SContainer>
      <Background />
      <SignInView onChange={onChangeSignInForm} isIdError={signInIdError} isPwError={signInPwError} onClick={onClickSignInBtn} />
    </SContainer>
  );
};
