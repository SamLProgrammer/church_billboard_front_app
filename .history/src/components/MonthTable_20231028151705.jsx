import { useResponse } from "../hooks/useResponse";


export const MonthTable = () => {
  const data = localStorage.get('selectedMonthData');

  const month = data.item;
  return (
    <div>{month}</div>
  )
}
