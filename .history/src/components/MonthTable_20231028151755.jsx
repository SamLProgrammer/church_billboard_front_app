
export const MonthTable = () => {
  const data = localStorage.getItem('selectedMonthData');

  const month = data.item;
  return (
    <div>{month}</div>
  )
}
