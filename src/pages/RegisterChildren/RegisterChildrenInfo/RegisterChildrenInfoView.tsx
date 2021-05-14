import { FC } from "react";
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

export const RegisterChildrenInfoView: FC = () => {
  return (
    <SContainer>
      <SInputFormWrapper>
        <InputForm
          type="text"
          title="이름"
          placeholder="아이의 이름을 입력하세요"
        />
        <ChildBirthday />
        <ChildGender />
      </SInputFormWrapper>
      <SubmitButton text="다음" />
      <WarningText />
      <PagePoint position={1} end={2} />
    </SContainer>
  );
};
