import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SWarning = styled.h1`
  font-size: 50px;
  color: red;
  margin-bottom: 50px;
`;

export const SLinkTo = styled(Link)`
  font-size: 25px;
  color: Black;
`;

interface Props {
  to: string;
  children: string;
}

const LinkRoute: FC<Props> = (props) => {
  return (
    <SContainer>
      <SWarning>존재하지 않는 경로입니다!</SWarning>
      <SLinkTo {...props}>Move to {props.children} Page</SLinkTo>
    </SContainer>
  );
};

export default LinkRoute;
