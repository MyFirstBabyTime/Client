import { FC, useContext, useEffect } from "react";
import { Background } from "../../components/Authentication/Background";
import styled from "styled-components";
import { RegisterChildrenView } from "./RegisterChildrenView";
import UserContextProvider from "../../contexts/UserContext";
import { useHistory } from "react-router";
import { SignUpContext } from "../../contexts/SignUpContext";
import { SIGN_UP } from "../../navigation/CONSTANTS";

const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const RegisterChildrenContainer: FC = () => {
  const history = useHistory();
  const { onDecreasePageNum, pageNum } = useContext(SignUpContext);

  useEffect(() => {
    if (pageNum === 0) history.push(SIGN_UP);
    if (pageNum === 3) history.push("/main");
  }, [pageNum, history]);

  return (
    <UserContextProvider>
      <SContainer>
        <Background />
        <RegisterChildrenView onDecreasePageNum={onDecreasePageNum} pageNum={pageNum} />
      </SContainer>
    </UserContextProvider>
  );
};
