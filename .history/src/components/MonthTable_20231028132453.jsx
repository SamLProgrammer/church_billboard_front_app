import { useResponse } from "../hooks/useResponse";

export const MonthTable = () => {
  const {response} =  useResponse();
  console.log('Month Table:');
  console.log(response);
  const month = response.item;
  return (
    <div>{month}</div>
  )
}
