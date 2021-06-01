import React, { FC } from "react";
import styled from "styled-components";

const SContainer = styled.div<{ isVisible: boolean | undefined }>`
  width: 100%;
  height: 9.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  visibility: ${(props) => props.isVisible ? 'inherit' : 'hidden'};
`;

const STitle = styled.h3`
  font-size: 1.1vw;
`;

const SInput = styled.input<{ isError: boolean | undefined }>`
  width: 100%;
  height: 6vh;
  border: 1px solid ${(props) => props.isError ? "#D0463B" : "#d2d2d2"};
  color: ${props => props.isError ? "#D0463B" : "#000"};
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
  name?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isVisible?: boolean;
  isError?: boolean;
}

export const InputForm: FC<Props> = ({ type, title, name, placeholder, onChange, isVisible, isError }) => {
  return (
    <SContainer isVisible={isVisible ?? true}>
      <STitle>{title}</STitle>
      <SInput type={type} name={name} placeholder={placeholder} onChange={onChange} isError={isError || false} autoComplete="off" />
    </SContainer>
  );
};
