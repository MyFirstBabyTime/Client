import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InputForm } from "../../components/SignInSignUp/InputForm";
import { SubmitButton } from "../../components/SignInSignUp/SubmitButton";
import { Title } from "../../components/SignInSignUp/Title";

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
  height: 21vh;
  margin-top: 7.5vh;
  margin-bottom: 31.4vh;
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

export const SignInView: FC = () => {
  return (
    <SContainer>
      <Title>회원가입</Title>
      <SInputFormWrapper>
        <InputForm
          type="text"
          title="아이디"
          placeholder="아이디를 입력하세요"
        />
        <InputForm
          type="password"
          title="비밀번호"
          placeholder="비밀번호를 입력하세요"
        />
      </SInputFormWrapper>
      <SubmitButton text="로그인" />
      <SLinkToSignUp to="/sign-up">회원가입하기</SLinkToSignUp>
    </SContainer>
  );
};
