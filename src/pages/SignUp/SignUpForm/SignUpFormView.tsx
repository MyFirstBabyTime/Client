import { FC } from "react";
import styled from "styled-components";
import { InputForm } from "../../../components/Authentication/InputForm";
import { PagePoint } from "../../../components/Authentication/PagePoint";
import { SubmitButton } from "../../../components/Authentication/SubmitButton";

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

export const SignUpFormView: FC<Props> = ({ onIncreasePageNum }) => {
  return (
    <SContainer>
      <SInputFormWrapper>
        <InputForm
          type="text"
          title="아이디"
          placeholder="4자리 이상 입력하세요"
        />
        <InputForm
          type="password"
          title="비밀번호"
          placeholder="특수문자 포함 6글자 이상 입력하세요"
        />
        <InputForm
          type="password"
          title="비밀번호 확인"
          placeholder="비밀번호를 확인하세요"
        />
      </SInputFormWrapper>
      <SubmitButton text="다음" onClick={onIncreasePageNum} />
      <PagePoint position={1} end={3} />
    </SContainer>
  );
};
