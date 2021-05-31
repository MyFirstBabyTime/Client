import { FC } from "react";
import { Background } from "../../components/Authentication/Background";
import styled from "styled-components";
import { RegisterChildrenView } from "./RegisterChildrenView";
import RegisterChildrenContextProvider from "../../contexts/RegisterChildrenContext";

const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const RegisterChildrenContainer: FC = () => {
  return (
      <RegisterChildrenContextProvider>
        <SContainer>
          <Background />
          <RegisterChildrenView />
        </SContainer>
      </RegisterChildrenContextProvider>
  );
};
