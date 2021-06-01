import { FC } from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 560px;
  height: 100%;
  background-color: #D0463B;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const SProductInfoInput = styled.input`
  width: 440px;
  height: 43px;
  background-color: #D0463B;
  border: none;
  outline: none;
  font-size: 22px;
  color: #fff;
  border-bottom: 2px solid #fff;
  margin-bottom: 80px;
  
  &::placeholder {
    color: #fff;
  }
`;

const SInfoText = styled.p`
  width: 90%;
  font-size: 18px;
  color: #fff;
  text-align: right;
  margin-bottom: 30px;
`;

const Info = '*구매한 상품의 이름과 금액을 입력해주세요';

export const ProductInfo: FC = () => {
  return (
    <SContainer>
      <SProductInfoInput placeholder="상품명을 입력해주세요" />
      <SProductInfoInput placeholder="단위(원)을 빼고 금액을 입력해주세요" />
      <SInfoText>{Info}</SInfoText>
    </SContainer>
  )
}