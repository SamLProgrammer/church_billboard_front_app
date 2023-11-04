import { useResponse } from "./useResponse";

export const useFetchMonthFamilyEvents = async() => {
    const { response, setResponse } = useResponse();
    console.log(response);
    console.log(setResponse);
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
}
