import { useEffect, useState } from "react"

export const useValidateLogin = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isValid, setisValid] = useState(false);
  
  const validateLogin = async (userName, password) => {
    const url = 'http://www.mysqlconnectornoderaged.com/login';
    const resp = await fetch(url);
    console.log('resp.json()');
    console.log(resp.json());
  }

  return {
    isLoading,
    validation
  }
}
