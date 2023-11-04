import { useEffect } from "react";
import { useResponse } from "../hooks/useResponse";


export const MonthTable = () => {
  const {response} = useResponse();
  let data;
  
  useEffect(() => {
    if(response != null) {
      data = response;
    }
  }, [])
  
  const month = data.item;
  return (
    <div>{month}</div>
  )
}
