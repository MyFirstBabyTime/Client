import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Warning = styled.h1`
  font-size: 50px;
  color: red;
  margin-bottom: 50px;
`;

export const LinkTo = styled(Link)`
  font-size: 25px;
  color: Black;
`;
