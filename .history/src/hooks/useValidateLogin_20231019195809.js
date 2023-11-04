export const validateLogin = async (userName, password) => {
    // const url = 'http://localhost:5000/login';
    const url = 'http://www.localhost.com:5000/login';
    const resp = await fetch(url);
    const data = await resp.json(); // Parse the JSON response
    console.log(data); // Log the response data
    return { ...data, userName, password };
  }