import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { InputForm } from "../../../components/Authentication/InputForm";
import { SubmitButton } from "../../../components/Authentication/SubmitButton";
import { WarningText } from "../../../components/Authentication/WarningText";
import { PagePoint } from "../../../components/Authentication/PagePoint";
import ChildBirthday from "./ChildBirthday";
import ChildGender from "./ChildGender";

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
  onChangeChildName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeChildBirth: (birth: string) => void;
  onChangeChildSex: (sex: 'male' | 'female') => void;
  onClickNextBtn: () => void;
}

export const RegisterChildrenInfoView: FC<Props> = ({ onChangeChildName, onChangeChildBirth, onChangeChildSex, onClickNextBtn }) => {
  return (
    <SContainer>
      <SInputFormWrapper>
        <InputForm
          type="text"
          title="이름"
          placeholder="아이의 이름을 입력하세요"
          onChange={onChangeChildName}
        />
        <ChildBirthday onChange={onChangeChildBirth} />
        <ChildGender onChange={onChangeChildSex} />
      </SInputFormWrapper>
      <SubmitButton text="다음" onClick={onClickNextBtn} />
      <WarningText />
      <PagePoint position={1} end={2} />
    </SContainer>
  );
};
