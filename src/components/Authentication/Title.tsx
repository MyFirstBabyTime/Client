import { FC } from "react";
import styled from "styled-components";

const SText = styled.h1`
  width: 24.2vw;
  font-size: 2.1vw;
  font-weight: bold;
`;

export const Title: FC = ({ children }) => {
  return <SText>{children}</SText>;
};
