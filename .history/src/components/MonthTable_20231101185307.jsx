import { FamilyEventTable } from "./FamilyEventTable";
import { MonthTitle } from "./MonthTitle";

export const MonthTable = () => {
  const data = localStorage.getItem('selectedMonthData');
  const {selectedMonth, monthData} = JSON.parse(data);
  console.log('monthData');
  console.log(monthData);
  return (
    <>
    <MonthTitle title={selectedMonth}/>
    <FamilyEventTable sundaysList={monthData.sundaysList} recordsList={monthData.supperList}/>
    </>
  )
}

// echo "# church_billboard_scripts" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M master
// git remote add origin https://github.com/SamLProgrammer/church_billboard_scripts.git
// git push -u origin master