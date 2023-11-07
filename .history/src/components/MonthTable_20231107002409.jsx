import { useState } from "react";
import { FamilyEventTable } from "./FamilyEventTable";
import { MonthTitle } from "./MonthTitle";

export const MonthTable = () => {
  const [currentData, setCurrentData] = useState(JSON.parse(localStorage.getItem('selectedMonthData')));

  const updateCurrentData = (updatedData) => {
    const existingData = JSON.parse(localStorage.getItem("monthsMap"));
      existingData[item] = data;
      localStorage.setItem("monthsMap", JSON.stringify(existingData));
  }

  const {selectedMonth, monthData, type} = currentData;
  return (
    <>
    <MonthTitle title={selectedMonth}/>
    <FamilyEventTable sundaysList={monthData.sundaysList} 
    recordsList={monthData.supperList} 
    updateCurrentData={updateCurrentData}
    type={type}
    month={selectedMonth}/>
    </>
  )
}