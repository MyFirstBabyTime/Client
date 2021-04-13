import { FC } from "react";
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
  return (
    <SContainer>
      <SInputFormWrapper>
        <SetProfile />
      </SInputFormWrapper>
      <SubmitButton text="아이 등록하기" onClick={onIncreasePageNum} />
      <WarningText />
      <PagePoint position={2} end={2} />
    </SContainer>
  );
};
