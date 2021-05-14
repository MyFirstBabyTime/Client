import { FC } from 'react';
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import SignUpValidation from "./SignUpValidation";
import SignUpProfile from "./SignUpProfile";
import { Title } from "../../components/Authentication/Title";
import { BackButton } from "../../components/Authentication/BackButton";

const SContainer = styled.div`
  width: 36vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.2vh;
  box-sizing: border-box;
`;

interface Props {
  onDecreasePageNum: () => void;
  pageNum: number;
}

export const SignUpView: FC<Props> = ({ onDecreasePageNum, pageNum }) => {
  return (
    <SContainer>
      <BackButton onClick={onDecreasePageNum} />
      <Title>회원가입</Title>
      {pageNum === 1 ? (
        <SignUpValidation />
      ) : pageNum === 2 ? (
        <SignUpForm />
      ) : pageNum === 3 ? (
        <SignUpProfile />
      ) : (
        ""
      )}
    </SContainer>
  );
};
