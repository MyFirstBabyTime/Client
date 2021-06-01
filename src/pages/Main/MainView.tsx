import { FC } from 'react';
import { Header } from '../../components/Header';
import Background from './MainBackground';
import RegisterProduct from './RegisterProduct';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainView: FC = () => {
  return (
    <SContainer>
      <Header />
      <Background />
      <RegisterProduct />
    </SContainer>
  )
};