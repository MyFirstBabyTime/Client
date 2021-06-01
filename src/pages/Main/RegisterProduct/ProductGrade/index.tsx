import { FC } from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  width: 355px;
  height: 100%;
  background-color: #36304B;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const STitle = styled.h3`
  width: 68%;
  font-size: 25px;
  text-align: left;
  color: #fff;
  margin-bottom: 80px;
`;

const SGradeWrapper = styled.div`
  width: 235px;
  height: 33px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

const SInfoText = styled.p`
  width: 85%;
  color: #fff;
  font-size: 18px;
  text-align: right;
  margin-bottom: 30px;
`;

const Info = "*구매한 상품에 평점을 매겨주세요";

export const ProductGrade: FC = () => {
  return (
    <SContainer>
      <STitle>평점</STitle>
      <SGradeWrapper>
        <span className="fa fa-star fa-2x" style={{ color: "white" }}/>
        <span className="fa fa-star fa-2x" style={{ color: "white" }}/>
        <span className="fa fa-star fa-2x" style={{ color: "white" }}/>
        <span className="fa fa-star fa-2x" style={{ color: "white" }}/>
        <span className="fa fa-star fa-2x" style={{ color: "white" }}/>
      </SGradeWrapper>
      <SInfoText>{Info}</SInfoText>
    </SContainer>
  )
};