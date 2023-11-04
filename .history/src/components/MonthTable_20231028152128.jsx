
export const MonthTable = () => {
  const data = localStorage.getItem('selectedMonthData');
  const parsedData = JSON.parse(data);
  const month = parsedData.item;
  return (
    <div>{month}</div>
  )
}
