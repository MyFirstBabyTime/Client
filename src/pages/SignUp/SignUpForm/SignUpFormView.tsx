import { ChangeEvent, FC } from "react";
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
  onChangeFormData: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickNextBtn: () => void;
  idError: boolean;
  pwError: boolean;
  pwConfirmError: boolean;
}

export const SignUpFormView: FC<Props> = ({ onChangeFormData, onClickNextBtn, idError, pwError, pwConfirmError }) => {
  return (
    <SContainer>
      <SInputFormWrapper>
        <InputForm
          type="text"
          title="아이디"
          name="id"
          isError={idError}
          placeholder="4자리 이상 입력하세요"
          onChange={onChangeFormData}
        />
        <InputForm
          type="password"
          title="비밀번호"
          name="pw"
          isError={pwError}
          placeholder="특수문자 포함 6글자 이상 입력하세요"
          onChange={onChangeFormData}
        />
        <InputForm
          type="password"
          title="비밀번호 확인"
          name="pwConfirm"
          isError={pwConfirmError}
          placeholder="비밀번호를 확인하세요"
          onChange={onChangeFormData}
        />
      </SInputFormWrapper>
      <SubmitButton text="다음" onClick={onClickNextBtn} />
      <PagePoint position={2} end={3} />
    </SContainer>
  );
};
