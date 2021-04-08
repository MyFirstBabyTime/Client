import { FC } from "react";
import styled from "styled-components";
import SignInSignUpBackground from "../../assets/image/SignInSignUpBackground.png";

const SContainer = styled.div`
  width: 64vw;
  height: 100%;
  background-image: url(${SignInSignUpBackground});
  background-size: cover;
  padding-top: 6vh;
  padding-left: 4vw;
  box-sizing: border-box;
`;

const SBackgroundText = styled.h1`
  width: 18vw;
  height: 12.2vh;
  font-size: 2.6vw;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;
  white-space: pre-line;
  border-bottom: 0.5vh solid #fff;
`;

const backgroundText: string = `우리 모두
육아는 처음이라`;

export const Background: FC = () => {
  return (
    <SContainer>
      <SBackgroundText>{backgroundText}</SBackgroundText>
    </SContainer>
  );
};
