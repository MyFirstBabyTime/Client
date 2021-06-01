export const YEAR_LIST = () => {
  const yearArray = [];
  for (let i = 2000; i <= new Date().getFullYear(); i++)
    yearArray.push(`${i}년`);
  return yearArray;
};

export const MONTH_LIST = () => {
  const monthArray = [];
  for (let i = 1; i <= 12; i++) monthArray.push(`${i}월`);
  return monthArray;
};

export const DAY_LIST = () => {
  const dayArray = [];
  for (let i = 1; i <= 31; i++) dayArray.push(`${i}일`);
  return dayArray;
};
