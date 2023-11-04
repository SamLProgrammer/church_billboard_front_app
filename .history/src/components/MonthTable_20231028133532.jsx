import { useResponse } from "../hooks/useResponse";


export const MonthTable = () => {
  const {response} = useResponse();

  const month = response.item;
  return (
    <div>{month}</div>
  )
}
