import React, { ChangeEvent, FC, useState } from "react";
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

interface IProfileForm {
  thumbnail: File | null;
  name: string;
}

interface Props {
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  nameError: boolean;
  onClickSignUpBtn: () => void;
}

export const SignUpProfileView: FC<Props> = ({ onChangeName, nameError, onClickSignUpBtn }) => {
  const [thumbnail, setThumbnail] = useState<string | undefined>();
  const [profileForm, setProfileForm] = useState<IProfileForm>({
    thumbnail: null,
    name: "",
  });

  const onChangeProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.value) return;

    const reader = new FileReader();

    setProfileForm({
      ...profileForm,
      thumbnail: e.target?.files[0],
    });

    reader.onload = function (e) {
      setThumbnail(e.target?.result?.toString());
    }

    reader.readAsDataURL(e.target.files[0]);
  }

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
