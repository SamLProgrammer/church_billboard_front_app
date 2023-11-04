
export const MonthTable = () => {
  const data = localStorage.getItem('selectedMonthData');
  console.log(data);
  console.log(JSON.stringify(data));
  console.log(JSON.parse(JSON.stringify(data)));
  const month = data.item;
  return (
    <div>{month}</div>
  )
}
