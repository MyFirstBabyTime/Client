import React, { FC } from "react";
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

const SProfileWrapper = styled.div`
  width: 100%;
  height: 7.8vw;
  border-radius: 50%;
  background-color: #d2d2d2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

const SDefaultProfileIcon = styled.img`
  width: 3.1vw;
  height: 3.1vw;
`;

const SProfileFileInputText = styled.label`
  font-size: 1.1vw;
  color: #8D8D8D;
  cursor: pointer;
`

const SProfileFileInput = styled.input`
  width: 100%;
  height: 100%;
  display: none;
`;

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  thumbnail: string | undefined;
}

export const SetProfile: FC<Props> = ({ onChange, thumbnail }) => {
  return (
    <SContainer>
      <SProfileWrapper>
        {thumbnail ?
          <SProfileImg src={thumbnail} /> :
          <SDefaultProfileIcon src={DefaultProfileIcon} />
        }
      </SProfileWrapper>
      <SProfileFileInputText>
        프로필 설정하기
        <SProfileFileInput type="file" onChange={onChange} />
      </SProfileFileInputText>
    </SContainer>
  );
};
