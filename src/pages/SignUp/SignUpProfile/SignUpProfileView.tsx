import { FC } from "react";
import styled from "styled-components";
import { InputForm } from "../../../components/Authentication/InputForm";
import { PagePoint } from "../../../components/Authentication/PagePoint";
import { SubmitButton } from "../../../components/Authentication/SubmitButton";
import DefaultProfileIcon from "../../../assets/image/DefaultProfileIcon.png";

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

const SProfileWrapper = styled.div`
  width: 7.8vw;
  height: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const SDefaultProfile = styled.div`
  width: 100%;
  height: 7.8vw;
  border-radius: 50%;
  background-color: #8d8d8d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SDefaultProfileIcon = styled.img`
  width: 3.1vw;
  height: 3.1vw;
`;

const SProfileExplanation = styled.p`
  font-size: 1.1vw;
  color: #8d8d8d;
`;

interface Props {
  onIncreasePageNum: () => void;
}

export const SignUpProfileView: FC<Props> = ({ onIncreasePageNum }) => {
  return (
    <SContainer>
      <SInputFormWrapper>
        <SProfileWrapper>
          <SDefaultProfile>
            <SDefaultProfileIcon src={DefaultProfileIcon} />
          </SDefaultProfile>
          <SProfileExplanation>프로필 설정하기</SProfileExplanation>
        </SProfileWrapper>
        <InputForm type="text" title="이름" placeholder="이름을 입력하세요" />
      </SInputFormWrapper>
      <SubmitButton text="회원가입" onClick={onIncreasePageNum} />
      <PagePoint position={3} />
    </SContainer>
  );
};
