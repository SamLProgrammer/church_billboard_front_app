import { useState } from "react";
import { FamilyEventTable } from "./FamilyEventTable";
import { MonthTitle } from "./MonthTitle";

export const MonthTable = () => {
  const [currentData, setCurrentData] = useState(
    JSON.parse(localStorage.getItem("selectedMonthData"))
  );
  const { selectedMonth, monthData, type } = currentData;

  const updateCurrentData = (changedRows, type) => {
    const existingData = JSON.parse(localStorage.getItem("monthsMap"));
    const transformedChangedRows = changedRows.map((row) => (
      {
      id: row.date, 
      familyEventDate: row.date, 
      familyEventTypeId: row.type, 
      family: row.family
      }
    ));
    switch (type) {
      case "H":
        {
          existingData[selectedMonth].supperList = [...existingData[selectedMonth].supperList, ...transformedChangedRows]
        }
        break;
      case "S":
        console.log("Tuesday is a productive day.");
        break;
      case "C":
        console.log("Tuesday is a productive day.");
        break;
    }
    existingData[selectedMonth] = data;
    localStorage.setItem("monthsMap", JSON.stringify(existingData));
  };

  return (
    <>
      <MonthTitle title={selectedMonth} />
      <FamilyEventTable
        sundaysList={monthData.sundaysList}
        recordsList={monthData.supperList}
        updateCurrentData={updateCurrentData}
        type={type}
      />
    </>
  );
};
