import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import SignUpValidation from "./SignUpValidation";
import SignUpProfile from "./SignUpProfile";
import { Title } from "../../components/Authentication/Title";
import { REGISTER_CHILDREN, SIGN_IN } from "../../navigation/CONSTANTS";
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

export const SignUpView: FC = () => {
  const history = useHistory();
  const [pageNum, setPageNum] = useState<number>(1);

  useEffect(() => {
    if (pageNum === 0) history.push(SIGN_IN);
    if (pageNum === 4) history.push(REGISTER_CHILDREN);
  }, [pageNum, history]);

  const onDecreasePageNum = () => {
    setPageNum((prev) => prev - 1);
  }

  const onIncreasePageNum = () => {
    setPageNum((prev) => prev + 1);
  };

  return (
    <SContainer>
      <BackButton onClick={onDecreasePageNum} />
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
