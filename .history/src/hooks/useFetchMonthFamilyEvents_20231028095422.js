import { useEffect } from "react";
import { useResponse } from "./useResponse";

export const useFetchMonthFamilyEvents = ( month ) => {
  const { response, setResponse } = useResponse();

  useEffect(() => {
    // Perform your data fetching and manipulation here
    console.log(month);
    console.log(response);
    console.log(setResponse);
  }, [month, response, setResponse]);

  return null; // or return JSX as needed
};

// const url = 'http://localhost:5000/months';

// const response = await fetch(url, {
//     method: 'POST',
//     credentials: 'include', 
//     headers: {
//         'Content-Type': 'application/json',
//         'CustomAuth': sessionToken, 
//     },
// });

// if (response.ok) {
//     return await response.text();
// } else {
//     throw new Error(`Request failed with status ${response.status}`);
// }
