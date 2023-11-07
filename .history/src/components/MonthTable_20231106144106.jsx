import { useEffect, useState } from "react";
import { FamilyEventTable } from "./FamilyEventTable";
import { MonthTitle } from "./MonthTitle";

export const MonthTable = () => {
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    setCurrentData(JSON.parse(localStorage.getItem('selectedMonthData')));
  }, [])

  const updateCurrentData = (newData)  => {
    setCurrentData(newData);
  }
  
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