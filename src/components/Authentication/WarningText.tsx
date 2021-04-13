import { FC } from "react";
import styled from "styled-components";

const SWarning = styled.p`
  height: 6vh;
  margin-top: 2.8vh;
  margin-bottom: 9.2vh;
  font-size: 1.1vw;
  white-space: pre-line;
  text-align: center;
  line-height: 1.5;
`;

const warningText: string = `*지금 아이 등록을 하지 않아도 마이페이지에서
등록하실 수 있습니다.`;

export const WarningText: FC = () => {
  return <SWarning>{warningText}</SWarning>;
};
