import React, { FC } from "react";
import styled from "styled-components";
import { InputForm } from "../../../components/Authentication/InputForm";
import { PagePoint } from "../../../components/Authentication/PagePoint";
import { SubmitButton } from "../../../components/Authentication/SubmitButton";
import { IValidationError } from "../../../hooks/domain/useSignUp/useSignUpValidation/payload";

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

const SInputContainer = styled.div`
  width: 100%;
  height: 9.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const STitle = styled.h3`
  font-size: 1.1vw;
`;

const SInputWrapper = styled.div<{ isError: boolean }>`
  width: 100%;
  height: 6vh;
  border: 1px solid ${(props) => props.isError ? "#D0463B" : "#d2d2d2"};
  display: flex;
  outline: none;
  border-radius: 3px;
`;

const SInputBox = styled.input<{ isError: boolean }>`
  width: 80%;
  height: 100%;
  font-size: 1.1vw;
  padding-left: 0.8vw;
  color: ${props => props.isError ? "#D0463B" : "#000"};
  box-sizing: border-box;
  border: none;
  outline: none;

  &::placeholder {
    color: #d2d2d2;
  }
`;

const SSendBox = styled.button`
  width: 3vw;
  height: 3.2vh;
  font-size: 1.1vw;
  margin: auto;
  background: #d0463b;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
`;

interface Props {
  isSentCertifyCode: boolean;
  validationError: IValidationError;
  onChangeValidationData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSendCertifyCodeBtn: () => void;
  onClickGetCertificationBtn: () => void;
}

export const SignUpValidationView: FC<Props> = ({
  isSentCertifyCode,
  validationError,
  onChangeValidationData,
  onClickSendCertifyCodeBtn,
  onClickGetCertificationBtn
}) => {
  return (
    <SContainer>
      <SInputFormWrapper>
        <SInputContainer>
          <STitle>문자인증</STitle>
          <SInputWrapper isError={validationError.phoneNumberError}>
            <SInputBox
              type="text"
              name="phoneNumber"
              placeholder="- 없이 전화번호를 입력해주세요"
              onChange={onChangeValidationData}
              isError={validationError.phoneNumberError}
              disabled={isSentCertifyCode}
              autoComplete="off"
            />
            <SSendBox onClick={onClickSendCertifyCodeBtn} disabled={isSentCertifyCode}>전송</SSendBox>
          </SInputWrapper>
        </SInputContainer>
        <InputForm
          type="text"
          title="인증번호"
          name="certifyCode"
          placeholder="인증번호를 입력하세요"
          onChange={onChangeValidationData}
          isVisible={isSentCertifyCode}
          isError={validationError.certifyCodeError}
        />
        <SInputContainer />
      </SInputFormWrapper>
      <SubmitButton text="다음" onClick={onClickGetCertificationBtn} />
      <PagePoint position={1} end={3} />
    </SContainer>
  );
};
