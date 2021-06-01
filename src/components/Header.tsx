import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 1520px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeaderLeftWrapper = styled.div`
  width: 15%;
`;

const HeaderTitle = styled.h3`
  font-size: 28px;
`;

const HeaderRightWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-end;
`;

const HeaderText = styled.p<{ logout?: boolean}>`
  font-size: 20px;
  margin-left: 100px;
  color: ${(props) => props.logout && '#D0463B'};
  cursor: pointer;
`;

export const Header: FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderLeftWrapper>
          <HeaderTitle>
            육아는 처음이라
          </HeaderTitle>
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <HeaderText>지출기록 조회</HeaderText>
          <HeaderText>한 달 지출 내역</HeaderText>
          <HeaderText>특정 아이템 검색</HeaderText>
          <HeaderText>마이페이지</HeaderText>
          <HeaderText logout>로그아웃</HeaderText>
        </HeaderRightWrapper>
      </HeaderWrapper>
    </Container>
  )
};