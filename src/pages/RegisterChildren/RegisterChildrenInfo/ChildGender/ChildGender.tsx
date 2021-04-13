import { FC, useState } from "react";
import styled from "styled-components";

const SContainer = styled.div`
  width: 100%;
  height: 9.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const STitle = styled.h3`
  font-size: 1.1vw;
`;

const SGenderWrapper = styled.div`
  width: 30%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
`;

const SGenderBox = styled.div<{ selected: boolean }>`
  width: 3vw;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d2d2d2;
  border-radius: 3px;
  background: ${(props) => (props.selected ? "#d2d2d2" : "#fff")};
  cursor: pointer;
`;

export const ChildGender: FC = () => {
  const [gender, setGender] = useState<number>(0);

  return (
    <SContainer>
      <STitle>성별</STitle>
      <SGenderWrapper>
        <SGenderBox selected={gender === 1} onClick={() => setGender(1)}>
          남
        </SGenderBox>
        <SGenderBox selected={gender === 2} onClick={() => setGender(2)}>
          여
        </SGenderBox>
      </SGenderWrapper>
    </SContainer>
  );
};
