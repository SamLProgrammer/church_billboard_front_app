import { useState } from "react";
import { FamilyEventTable } from "./FamilyEventTable";
import { MonthTitle } from "./MonthTitle";

export const MonthTable = () => {
  const [currentData, setSelectedMonthData] = useState(
    JSON.parse(localStorage.getItem("selectedMonthData"))
  );
  const { selectedMonth, monthData, type } = currentData;
  //again
  const updateCurrentData = (changedRows, type) => {
    console.log('called me with: ', type);
    console.log(changedRows);
    const existingData = {...JSON.parse(localStorage.getItem("monthsMap"))};
    const transformedChangedRows = changedRows.map((row) => ({
      id: row.date,
      familyEventDate: row.date,
      familyEventTypeId: row.type,
      family: row.family,
    }));
    switch (type) {
      case "H": {

        if (existingData[selectedMonth].supperList?.length > 0) {
          existingData[selectedMonth].supperList = existingData[selectedMonth].supperList.map((supperItem) => {
            const matchingItem = transformedChangedRows.find((changedItem) => {
              return supperItem.familyEventDate === changedItem.familyEventDate;
            });
      
            if (matchingItem) {
              return { ...supperItem, family: matchingItem.family };
            }
            return supperItem;
          });
        } else {
          existingData[selectedMonth].supperList = [...transformedChangedRows];
        }
      }
      break;
      
      case "S":
        {
          if (existingData[selectedMonth].snackList?.length > 0) {
            existingData[selectedMonth].snackList = existingData[
              selectedMonth
            ].snackList.map((snackItem) => {
              const matchingItem = transformedChangedRows.find(
                (changedItem) => {
                  return (
                    snackItem.familyEventDate === changedItem.familyEventDate
                  );
                }
              );
              if (matchingItem) {
                return { ...snackItem, family: matchingItem.family };
              }
              return snackItem;
            });
          } else {
            existingData[selectedMonth].snackList = [...transformedChangedRows];
          }
        }
        break;
      case "C":
        {
          if (existingData[selectedMonth].cleaningList?.length > 0) {
            existingData[selectedMonth].cleaningList = existingData[
              selectedMonth
            ].cleaningList.map((cleaningItem) => {
              const matchingItem = transformedChangedRows.find(
                (changedItem) => {
                  console.log('cleaningItem.familyEventDate');
                  console.log(cleaningItem.familyEventDate);
                  console.log('changedItem.date');
                  console.log(changedItem);
                  return (
                    cleaningItem.familyEventDate == changedItem.date
                  );
                }
              );
              if (matchingItem) {
                return { ...cleaningItem, family: matchingItem.family };
              }
              return cleaningItem;
            });
          } else {
            existingData[selectedMonth].cleaningList = [...transformedChangedRows];
          }
        }
        break;
    }
    localStorage.setItem("monthsMap", JSON.stringify(existingData));
    const currentSelectedMonthData = JSON.parse(localStorage.getItem("monthsMap"));
    console.log('currentSelectedMonthData');
    console.log(currentSelectedMonthData);
    // localStorage.setItem("selectedMonthData", JSON.stringify());
    // console.log(JSON.parse(localStorage.getItem("monthsMap")));
    // console.log(JSON.parse(Object.entries(JSON.stringify(localStorage.getItem("monthsMap")))));
    // setCurrentData(existingData);
  };

  return (
    <>
      <MonthTitle title={selectedMonth} />
      <FamilyEventTable
        daysList={
          type == "H" || type == "S"
            ? monthData.sundaysList
            : type == "C"
            ? monthData.saturdaysList
            : type == "B"
            ? monthData.monthDaysList
            : "Error on Type"
        }
        recordsList={
          type == "H"
            ? monthData.supperList
            : type == "S"
            ? monthData.snackList
            : type == "C"
            ? monthData.cleaningList
            : type == "B"
            ? monthData.birthDaysList
            : "Error on Type"
        }
        updateCurrentData={updateCurrentData}
        type={type}
      />
    </>
  );
};
