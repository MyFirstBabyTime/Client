import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InputForm } from "../../components/Authentication/InputForm";
import { SubmitButton } from "../../components/Authentication/SubmitButton";
import { Title } from "../../components/Authentication/Title";

const SContainer = styled.div`
  width: 36vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14.8vh;
  box-sizing: border-box;
`;

const SInputFormWrapper = styled.div`
  width: 24.2vw;
  height: 34.5vh;
  margin-top: 7.5vh;
  margin-bottom: 10.9vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SLinkToSignUp = styled(Link)`
  margin-top: 4.6vh;
  font-size: 1.1vw;
  color: #000;
  text-decoration: underline;
`;

const SEmptyBox = styled.div`
  width: 100%;
  height: 9.5vh;
`;

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isIdError: boolean;
  isPwError: boolean;
  onClick: () => void;
}

export const SignInView: FC<Props> = ({ onChange, isIdError, isPwError, onClick }) => {
  return (
    <SContainer>
      <Title>로그인</Title>
      <SInputFormWrapper>
        <InputForm
          type="text"
          title="아이디"
          name="id"
          placeholder="아이디를 입력하세요"
          isError={isIdError}
          onChange={onChange}
        />
        <InputForm
          type="password"
          title="비밀번호"
          name="pw"
          placeholder="비밀번호를 입력하세요"
          isError={isPwError}
          onChange={onChange}
        />
        <SEmptyBox />
      </SInputFormWrapper>
      <SubmitButton text="로그인" onClick={onClick} />
      <SLinkToSignUp to="/sign-up">회원가입하기</SLinkToSignUp>
    </SContainer>
  );
};
