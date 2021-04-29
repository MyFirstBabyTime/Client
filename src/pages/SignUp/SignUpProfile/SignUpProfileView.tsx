import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { InputForm } from "../../../components/Authentication/InputForm";
import { PagePoint } from "../../../components/Authentication/PagePoint";
import { SubmitButton } from "../../../components/Authentication/SubmitButton";
import { SetProfile } from "../../../components/Authentication/SetProfile";

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SInputFormWrapper = styled.div`
  width: 24.2vw;
  height: 34.5vh;
  margin-top: 7.5vh;
  margin-bottom: 10.9vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface Props {
  onChangeProfileImg: (e: ChangeEvent<HTMLInputElement>) => void;
  thumbnail: string | undefined;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  nameError: boolean;
  onClickSignUpBtn: () => void;
}

export const SignUpProfileView: FC<Props> = ({ onChangeProfileImg, thumbnail, onChangeName, nameError, onClickSignUpBtn }) => {
  return (
    <SContainer>
      <SInputFormWrapper>
        <SetProfile onChange={onChangeProfileImg} thumbnail={thumbnail} />
        <InputForm type="text" title="이름" placeholder="이름을 입력하세요" isError={nameError} onChange={onChangeName} />
      </SInputFormWrapper>
      <SubmitButton text="회원가입" onClick={onClickSignUpBtn} />
      <PagePoint position={3} end={3} />
    </SContainer>
  );
};
