export const validateLogin = async (userName, password) => {
  console.log('they calle dme')
    // const url = 'http://localhost:5000/login';
    const url = 'http://www.mysqlconnectornoderaged.com/login';
    const resp = await fetch(url);
    const data = await resp.json(); // Parse the JSON response
    console.log(data); // Log the response data
    return { ...data, userName, password };
  };