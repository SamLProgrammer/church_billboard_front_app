import { useResponse } from "../hooks/useResponse";

export const MonthTable = () => {
  const {response} =  useResponse();
  console.log('Month Table:');
  console.log(response);
  return (
    <div>{MonthTable}</div>
  )
}
