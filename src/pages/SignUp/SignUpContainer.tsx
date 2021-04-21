import { FC } from "react";
import styled from "styled-components";
import { Background } from "../../components/Authentication/Background";
import SignUpContextProvider from "../../contexts/SignUpContext";
import { SignUpView } from "./SignUpView";

const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const SignUpContainer: FC = () => {
  return (
    <SignUpContextProvider>
      <SContainer>
        <Background />
        <SignUpView />
      </SContainer>
    </SignUpContextProvider>
  );
};
