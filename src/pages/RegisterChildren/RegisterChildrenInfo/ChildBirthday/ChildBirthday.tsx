import { FC, useState, useRef, useEffect } from "react";
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
  const [dayList, setDayList] = useState<Array<string>>([]);
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    controllDayArray();
  }, []);

  const controllDayArray = () => {
    if (["4월", "6월", "9월", "11월"].includes(monthRef.current?.value ?? "")) {
      setDayList(DAY_LIST().slice(0, 30));
    } else if (monthRef.current?.value === "2월") {
      if (
        (parseInt(yearRef.current?.value ?? "") % 4 === 0 &&
          parseInt(yearRef.current?.value ?? "") % 100 !== 0) ||
        parseInt(yearRef.current?.value ?? "") % 400 === 0
      )
        setDayList(DAY_LIST().splice(0, 29));
      else {
        setDayList(DAY_LIST().splice(0, 28));
      }
    } else {
      setDayList(DAY_LIST());
    }
  };

  return (
    <SContainer>
      <STitle>생년월일</STitle>
      <SSelectWrapper>
        <SSelect width={5} ref={yearRef} onChange={controllDayArray}>
          {YEAR_LIST().map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </SSelect>
        <SSelect width={5} ref={monthRef} onChange={controllDayArray}>
          {MONTH_LIST().map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </SSelect>
        <SSelect width={4} ref={dayRef}>
          {dayList.map((item, index) => {
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
