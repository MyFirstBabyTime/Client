import { FC, useState } from "react";
import styled from "styled-components";
import { SetProfile } from "../../../components/Authentication/SetProfile";
import { SubmitButton } from "../../../components/Authentication/SubmitButton";
import { PagePoint } from "../../../components/Authentication/PagePoint";
import { WarningText } from "../../../components/Authentication/WarningText";

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
  onIncreasePageNum: () => void;
}

export const RegisterChildrenProfileView: FC<Props> = ({
  onIncreasePageNum,
}) => {
  const [thumbnail, setThumbnail] = useState<string | undefined>();
  const [profileThumbnail, setProfileThumbnail] = useState<File | null>(null);

  const onChangeProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const reader = new FileReader();

    setProfileThumbnail(e.target.files[0]);

    reader.onload = function (e) {
      setThumbnail(e.target?.result?.toString());
    }

    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <SContainer>
      <SInputFormWrapper>
        <SetProfile onChange={onChangeProfileImg} thumbnail={thumbnail} />
      </SInputFormWrapper>
      <SubmitButton text="아이 등록하기" onClick={onIncreasePageNum} />
      <WarningText />
      <PagePoint position={2} end={2} />
    </SContainer>
  );
};
