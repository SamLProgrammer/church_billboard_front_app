
export const MonthTable = () => {
  const data = localStorage.getItem('selectedMonthData');
  console.log(JSON.parse(data));
  const month = data.item;
  return (
    <div>{month}</div>
  )
}
