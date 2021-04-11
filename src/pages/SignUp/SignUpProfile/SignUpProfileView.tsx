import { FC } from "react";
import styled from "styled-components";

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

interface Props {
  onIncreasePageNum: () => void;
}

export const SignUpProfileView: FC<Props> = ({ onIncreasePageNum }) => {
  return <SContainer>asdfasdf</SContainer>;
};
