import { FC, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Background } from "../../components/Authentication/Background";
import SignUpContextProvider, { SignUpContext } from "../../contexts/SignUpContext";
import { REGISTER_CHILDREN, SIGN_IN } from "../../navigation/CONSTANTS";
import { SignUpView } from "./SignUpView";

const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const SignUpContainer: FC = () => {
  const history = useHistory();
  const { pageNum, onDecreasePageNum } = useContext(SignUpContext);

  useEffect(() => {
    if (pageNum === 0) history.push(SIGN_IN);
    if (pageNum === 4) history.push(REGISTER_CHILDREN);
  }, [pageNum, history]);

  return (
    <SignUpContextProvider>
      <SContainer>
        <Background />
        <SignUpView onDecreasePageNum={onDecreasePageNum} pageNum={pageNum} />
      </SContainer>
    </SignUpContextProvider>
  );
};
