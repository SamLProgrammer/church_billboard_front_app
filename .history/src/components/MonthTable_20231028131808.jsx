import { useResponse } from "../hooks/useResponse";

export const MonthTable = () => {
  const {response} =  useResponse();
  return (
    <div>{response}</div>
  )
}
