import { FC } from "react";
import styled from "styled-components";
import { DAY_LIST, MONTH_LIST, YEAR_LIST } from "./DATE_CONSTANTS";

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

const SSelectWrapper = styled.div`
  width: 70%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
`;

const SSelect = styled.select<{ width: number }>`
  width: ${(props) => props.width}vw;
  height: 6vh;
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  outline: none;
  font-size: 1.1vw;
  padding-left: 5px;
  box-sizing: border-box;
`;

export const ChildBirthday: FC = () => {
  return (
    <SContainer>
      <STitle>생년월일</STitle>
      <SSelectWrapper>
        <SSelect width={5}>
          {YEAR_LIST.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </SSelect>
        <SSelect width={5}>
          {MONTH_LIST.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </SSelect>
        <SSelect width={4}>
          {DAY_LIST.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </SSelect>
      </SSelectWrapper>
    </SContainer>
  );
};
