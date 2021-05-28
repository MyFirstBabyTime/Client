import { FC, useContext, useEffect } from 'react';
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import SignUpValidation from "./SignUpValidation";
import SignUpProfile from "./SignUpProfile";
import { Title } from "../../components/Authentication/Title";
import { BackButton } from "../../components/Authentication/BackButton";
import { REGISTER_CHILDREN, SIGN_IN } from '../../navigation/CONSTANTS';
import { SignUpContext } from '../../contexts/SignUpContext';
import { useHistory } from 'react-router';

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
  const { pageNum, onDecreasePageNum } = useContext(SignUpContext);

  useEffect(() => {
    if (pageNum === 0) history.push(SIGN_IN);
    if (pageNum === 4) history.push(REGISTER_CHILDREN);
  }, [pageNum, history]);

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
