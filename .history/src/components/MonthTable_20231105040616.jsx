import { FamilyEventTable } from "./FamilyEventTable";
import { MonthTitle } from "./MonthTitle";

export const MonthTable = () => {
  const data = localStorage.getItem('selectedMonthData');
  const {selectedMonth, monthData} = JSON.parse(data);
  return (
    <>
    <MonthTitle title={selectedMonth}/>
    <FamilyEventTable sundaysList={monthData.sundaysList} recordsList={monthData.supperList}/>
    </>
  )
}