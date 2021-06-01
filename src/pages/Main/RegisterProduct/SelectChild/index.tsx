import { FC } from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 320px;
  height: 100%;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const SSelectBox = styled.div`
  width: 120px;
  height: 188px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const SChildBox = styled.div<{ selected?: boolean}>`
  width: 100%;
  height: 46px;
  border: 2px solid #fff;
  background-color: ${(props) => props.selected ? '#fff' : '313131'};
  color: ${(props) => props.selected ? '#D0463B': '#fff'};
  font-size: 25px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SInfoText = styled.p`
  width: 80%;
  font-size: 18px;
  color: #fff;
  white-space: pre;
  text-align: right;
  margin-bottom: 30px;
  line-height: 23px;
`;

const Info = "*어떤 아이를 위한\n물품을 구매했는지 선택해주세요";

export const SelectChild: FC = () => {
  return (
    <SContainer>
      <SSelectBox>
        <SChildBox selected>용석현</SChildBox>
        <SChildBox>유명철</SChildBox>
        <SChildBox>손완서</SChildBox>
      </SSelectBox>
      <SInfoText>{Info}</SInfoText>
    </SContainer>
  )
}