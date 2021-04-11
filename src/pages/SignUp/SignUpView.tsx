import { FC, useState } from "react";
import styled from "styled-components";
import { Title } from "../../components/Authentication/Title";
import SignUpForm from "./SignUpForm";
import SignUpValidation from "./SignUpValidation";
import SignUpProfile from "./SignUpProfile";

const SContainer = styled.div`
  width: 36vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14.8vh;
  box-sizing: border-box;
`;

export const SignUpView: FC = () => {
  const [pageNum, setPageNum] = useState<number>(1);

  const onIncreasePageNum = () => {
    setPageNum((prev) => prev + 1);
  };

  return (
    <SContainer>
      <Title>회원가입</Title>
      {pageNum === 1 ? (
        <SignUpForm onIncreasePageNum={onIncreasePageNum} />
      ) : pageNum === 2 ? (
        <SignUpValidation onIncreasePageNum={onIncreasePageNum} />
      ) : pageNum === 3 ? (
        <SignUpProfile onIncreasePageNum={onIncreasePageNum} />
      ) : (
        ""
      )}
    </SContainer>
  );
};
