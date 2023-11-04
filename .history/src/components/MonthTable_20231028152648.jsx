import { MonthTitle } from "./MonthTitle";

export const MonthTable = () => {
  const data = localStorage.getItem('selectedMonthData');
  const parsedData = JSON.parse(data);
  const month = parsedData.item;
  console.log(parsedData);
  return (
    <>
    <MonthTitle/>
    </>
  )
}
