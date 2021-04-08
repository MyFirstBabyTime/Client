import { FC } from "react";
import styled from "styled-components";

const SContainer = styled.div`
  width: 100%;
  height: 9.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const STitle = styled.h3`
  font-size: 1.1vw;
`;

const SInput = styled.input`
  width: 100%;
  height: 6vh;
  border: 1px solid #d2d2d2;
  padding-left: 0.8vw;
  box-sizing: border-box;
  outline: none;
  font-size: 1.1vw;
  border-radius: 3px;

  &::placeholder {
    color: #d2d2d2;
  }
`;

interface Props {
  type: string;
  title: string;
  placeholder: string;
}

export const InputForm: FC<Props> = ({ type, title, placeholder }) => {
  return (
    <SContainer>
      <STitle>{title}</STitle>
      <SInput type={type} placeholder={placeholder} />
    </SContainer>
  );
};
