import { useState } from "react";
import { FamilyEventTable } from "./FamilyEventTable";
import { MonthTitle } from "./MonthTitle";

export const MonthTable = () => {
  const [currentData] = useState(
    JSON.parse(localStorage.getItem("selectedMonthData"))
  );
  const { selectedMonth, monthData, type } = currentData;
  //again
  const updateCurrentData = (changedRows, type) => {
    const existingData = JSON.parse(localStorage.getItem("monthsMap"));
    const transformedChangedRows = changedRows.map((row) => ({
      id: row.date,
      familyEventDate: row.date,
      familyEventTypeId: row.type,
      family: row.family,
    }));
    switch (type) {
      case "H":
        {
          if (existingData[selectedMonth].supperList) {
            existingData[selectedMonth].supperList = existingData[
              selectedMonth
            ].supperList.map((supperItem) => {
              const matchingItem = transformedChangedRows.find(
                (changedItem) => {
                  return (
                    supperItem.familyEventDate === changedItem.familyEventDate
                  );
                }
              );
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
          if (existingData[selectedMonth].snackList) {
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
          if (existingData[selectedMonth].cleaningList) {
            existingData[selectedMonth].snackList = existingData[
              selectedMonth
            ].cleaningList.map((cleaningItem) => {
              const matchingItem = transformedChangedRows.find(
                (changedItem) => {
                  return (
                    cleaningItem.familyEventDate === changedItem.familyEventDate
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
    // setCurrentData(existingData);
  };

  return (
    <>
      <MonthTitle title={selectedMonth} />
      <FamilyEventTable
        sundaysList={monthData.sundaysList}
        recordsList={(type == 'H') ? monthData.supperList : (type == 'S') ? monthData.snackList : 'Error on Type'}
        updateCurrentData={updateCurrentData}
        type={type}
      />
    </>
  );
};
