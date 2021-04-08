import { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 24.2vw;
  height: 6vh;
  background: #d0463b;
  color: #fff;
  font-size: 1.1vw;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
`;

interface Props {
  text: string;
}

export const SubmitButton: FC<Props> = ({ text }) => {
  return <Button>{text}</Button>;
};
