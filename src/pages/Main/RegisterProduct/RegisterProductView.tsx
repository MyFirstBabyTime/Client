import { FC } from 'react';
import styled from 'styled-components';
import { ProductGrade } from './ProductGrade';
import { ProductInfo } from './ProductInfo';
import { RegisterBox } from './RegisterBox';
import { SelectChild } from './SelectChild';

const SContainer = styled.div`
  width: 100%;
  height: calc(100% - 570px);
  display: flex;
  justify-content: center;
`;

const SMainWrapper = styled.div`
  width: 1520px;
  height: 100%;
  display: flex;
`;

export const RegisterProductView: FC = () => {
  return (
    <SContainer>
      <SMainWrapper>
        <RegisterBox />
        <SelectChild />
        <ProductInfo />
        <ProductGrade />
      </SMainWrapper>
    </SContainer>
  )
};