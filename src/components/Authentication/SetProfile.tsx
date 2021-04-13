import { FC } from "react";
import styled from "styled-components";
import DefaultProfileIcon from "../../assets/image/DefaultProfileIcon.png";

const SContainer = styled.div`
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

export const SetProfile: FC = () => {
  return (
    <SContainer>
      <SDefaultProfile>
        <SDefaultProfileIcon src={DefaultProfileIcon} />
      </SDefaultProfile>
      <SProfileExplanation>프로필 설정하기</SProfileExplanation>
    </SContainer>
  );
};
