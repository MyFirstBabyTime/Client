import { FC } from "react";
import styled from "styled-components";
import RegisterChildrenInfo from "./RegisterChildrenInfo";
import RegisterChildrenProfile from "./RegisterChildrenProfile";
import { Title } from "../../components/Authentication/Title";
import { BackButton } from "../../components/Authentication/BackButton";

const SContainer = styled.div`
  width: 36vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.2vh;
  box-sizing: border-box;
`;

interface Props {
  onDecreasePageNum: () => void;
  pageNum: number;
}

export const RegisterChildrenView: FC<Props> = ({ onDecreasePageNum, pageNum }) => {
  return (
    <SContainer>
      <BackButton onClick={onDecreasePageNum} />
      <Title>내 아이 등록하기</Title>
      {pageNum === 1 ? (
        <RegisterChildrenInfo />
      ) : pageNum === 2 ? (
        <RegisterChildrenProfile />
      ) : (
        ""
      )}
    </SContainer>
  );
};
