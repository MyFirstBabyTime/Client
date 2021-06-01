import { FC } from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 285px;
  height: 100%;
  background-color: #DFDFDF;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const STitle = styled.h3`
  font-size: 25px;
  white-space: pre;
  text-align: center;
  margin-bottom: 40px;
  line-height: 35px;
`;

const SRegisterButton = styled.button`
  width: 182px;
  height: 54px;
  border-radius: 20px;
  border: 2px solid #D0463B;
  background-color: #DFDFDF;
  color: #D0463B;
  font-size: 25px;
  margin-bottom: 40px;
`;

const SInfoText = styled.p`
  width: 80%;
  font-size: 18px;
  color: #D0463B;
  white-space: pre;
  text-align: right;
  margin-bottom: 30px;
  line-height: 23px;
`;

const Title = '구매 물품\n등록하기';
const Info = '*오른쪽의 폼을 모두\n작성하면 등록할 수 있습니다.';

export const RegisterBox: FC = () => {
  return (
    <SContainer>
      <STitle>{Title}</STitle>
      <SRegisterButton>등록하기</SRegisterButton>
      <SInfoText>{Info}</SInfoText>
    </SContainer>
  )
}