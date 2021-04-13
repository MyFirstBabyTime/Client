import { FC, useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import RegisterChildrenInfo from "./RegisterChildrenInfo";
import RegisterChildrenProfile from "./RegisterChildrenProfile";
import { Title } from "../../components/Authentication/Title";

const SContainer = styled.div`
  width: 36vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14.8vh;
  box-sizing: border-box;
`;

export const RegisterChildrenView: FC = () => {
  const history = useHistory();
  const [pageNum, setPageNum] = useState<number>(1);

  useEffect(() => {
    if (pageNum === 3) history.push("/main");
  }, [pageNum, history]);

  const onIncreasePageNum = () => {
    setPageNum((prev) => prev + 1);
  };

  return (
    <SContainer>
      <Title>내 아이 등록하기</Title>
      {pageNum === 1 ? (
        <RegisterChildrenInfo onIncreasePageNum={onIncreasePageNum} />
      ) : pageNum === 2 ? (
        <RegisterChildrenProfile onIncreasePageNum={onIncreasePageNum} />
      ) : (
        ""
      )}
    </SContainer>
  );
};