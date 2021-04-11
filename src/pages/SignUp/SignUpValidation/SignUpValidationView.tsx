import { FC } from "react";
import styled from "styled-components";
import { InputForm } from "../../../components/Authentication/InputForm";
import { PagePoint } from "../../../components/Authentication/PagePoint";
import { SubmitButton } from "../../../components/Authentication/SubmitButton";

const SContainer = styled.div`
  width: 36vw;
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

const SInputWrapper = styled.div`
  width: 100%;
  height: 6vh;
  border: 1px solid #d2d2d2;
  display: flex;
  outline: none;
  border-radius: 3px;
`;

const SInputBox = styled.input`
  width: 80%;
  height: 100%;
  font-size: 1.1vw;
  padding-left: 0.8vw;
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
  onIncreasePageNum: () => void;
}

export const SignUpValidationView: FC<Props> = ({ onIncreasePageNum }) => {
  return (
    <SContainer>
      <SInputFormWrapper>
        <SInputContainer>
          <STitle>문자인증</STitle>
          <SInputWrapper>
            <SInputBox placeholder="- 없이 전화번호를 입력해주세요" />
            <SSendBox>전송</SSendBox>
          </SInputWrapper>
        </SInputContainer>
        <InputForm
          type="text"
          title="인증번호"
          placeholder="인증번호를 입력하세요"
        />
        <SInputContainer />
      </SInputFormWrapper>
      <SubmitButton text="다음" onClick={onIncreasePageNum} />
      <PagePoint position={2} />
    </SContainer>
  );
};
