import { useEffect, useState } from "react";
import { FamilyEventTable } from "./FamilyEventTable";
import { MonthTitle } from "./MonthTitle";

const updateCurrentData = (setCurrentData, newData)  => {
  setCurrentData(newData);
}

export const MonthTable = () => {
  const [currentData, setCurrentData] = useState(JSON.parse(localStorage.getItem('selectedMonthData')));
  
  useEffect(() => {
    setCurrentData(JSON.parse(localStorage.getItem('selectedMonthData')));
  }, [])

  console.log(currentData);

  
  const {selectedMonth, monthData} = currentData;
  return (
    <>
    <MonthTitle title={selectedMonth}/>
    <FamilyEventTable sundaysList={monthData.sundaysList} 
    recordsList={monthData.supperList} 
    updateCurrentData={updateCurrentData}/>
    </>
  )
}