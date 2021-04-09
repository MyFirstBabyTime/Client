import { FC } from "react";
import styled from "styled-components";

const SContainer = styled.div`
  width: 3.4vw;
  height: 1.1vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18vh;
`;

const SPoint = styled.div<{ now: boolean }>`
  width: 1.1vh;
  height: 100%;
  background: ${(props) => (props.now ? "#D0463B" : "#d2d2d2")};
  border-radius: 50%;
  border: none;
`;

interface Props {
  position: number;
}

export const PagePoint: FC<Props> = ({ position }) => {
  return (
    <SContainer>
      <SPoint now={position === 1} />
      <SPoint now={position === 2} />
      <SPoint now={position === 3} />
    </SContainer>
  );
};
