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
    console.log("called me with: ", type);
    console.log(changedRows);
    const existingData = { ...JSON.parse(localStorage.getItem("monthsMap")) };
    let transformedChangedRows = changedRows.map((row) => ({
      id: row.date,
      familyEventDate: row.date,
      familyEventTypeId: row.type,
      family: row.family,
    }));
    switch (type) {
      case "H":
        {
          if (existingData[selectedMonth].supperList?.length > 0) {
            existingData[selectedMonth].supperList = 
            existingData[selectedMonth].supperList.map((supperItem) => {
              const matchingItem = transformedChangedRows.find(
                (changedItem) => {
                  return (
                    supperItem.familyEventDate === changedItem.familyEventDate
                  );
                }
              );
              if(matchingItem) {
                transformedChangedRows = transformedChangedRows.filter((row) => {
                  supperItem.familyEventDate === row.familyEventDate
                })
                return {...supperItem, family: matchingItem.family}
              }
              return supperItem;
            })
            existingData[selectedMonth].supperList = [...existingData[selectedMonth].supperList, ...transformedChangedRows];
          }else {
            existingData[selectedMonth].supperList = [...transformedChangedRows];
          }
        }
        break;

      case "S":
        {
          if (existingData[selectedMonth].snackList?.length > 0) {
            existingData[selectedMonth].snackList = 
            existingData[selectedMonth].snackList.map((snackItem) => {
              const matchingItem = transformedChangedRows.find(
                (changedItem) => {
                  return (
                    snackItem.familyEventDate === changedItem.familyEventDate
                  );
                }
              );
              if(matchingItem) {
                transformedChangedRows = transformedChangedRows.filter((row) => {
                  snackItem.familyEventDate === row.familyEventDate
                })
                return {...snackItem, family: matchingItem.family}
              }
              return snackItem;
            })
            existingData[selectedMonth].snackList = [...existingData[selectedMonth].snackList, ...transformedChangedRows];
          }else {
            existingData[selectedMonth].snackList = [...transformedChangedRows];
          }
        }
        break;
      case "C":
        {
          if (existingData[selectedMonth].cleaningList?.length > 0) {
            existingData[selectedMonth].cleaningList = 
            existingData[selectedMonth].cleaningList.map((cleaningItem) => {
              const matchingItem = transformedChangedRows.find(
                (changedItem) => {
                  return (
                    cleaningItem.familyEventDate === changedItem.familyEventDate
                  );
                }
              );
              if(matchingItem) {
                transformedChangedRows = transformedChangedRows.filter((row) => {
                  cleaningItem.familyEventDate === row.familyEventDate
                })
                return {...cleaningItem, family: matchingItem.family}
              }
              return cleaningItem;
            })
            existingData[selectedMonth].cleaningList = [...existingData[selectedMonth].cleaningList, ...transformedChangedRows];
          }else {
            existingData[selectedMonth].cleaningList = [...transformedChangedRows];
          }
        }
        break;
      case "B":
        {
          if (existingData[selectedMonth].birthDaysList?.length > 0) {
            existingData[selectedMonth].birthDaysList = 
            existingData[selectedMonth].birthDaysList.map((birthDateItem) => {
              const matchingItem = transformedChangedRows.find(
                (changedItem) => {
                  return (
                    birthDateItem.familyEventDate === changedItem.familyEventDate
                  );
                }
              );
              if(matchingItem) {
                transformedChangedRows = transformedChangedRows.filter((row) => {
                  birthDateItem.familyEventDate === row.familyEventDate
                })
                return {...birthDateItem, family: matchingItem.family}
              }
              return birthDateItem;
            })
            existingData[selectedMonth].birthDaysList = [...existingData[selectedMonth].birthDaysList, ...transformedChangedRows];
          }else {
            existingData[selectedMonth].birthDaysList = [...transformedChangedRows];
          }
        }
        break;
    }
    localStorage.setItem("monthsMap", JSON.stringify(existingData));
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
