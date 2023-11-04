import { useEffect } from "react";
import { useResponse } from "./useResponse";

export const FetchMonthFamilyEvents = ( month ) => {
  const { response, setResponse } = useResponse();

  useEffect(() => {
    console.log(month);
    console.log(response);
    console.log(setResponse);
  }, [month, response, setResponse]);

  return null; 
};
