import { FC } from "react";
import { Background } from "../../components/Authentication/Background";
import { SignInView } from "./SignInView";
import styled from "styled-components";

const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const SignInConatiner: FC = () => {
  return (
    <SContainer>
      <Background />
      <SignInView />
    </SContainer>
  );
};
