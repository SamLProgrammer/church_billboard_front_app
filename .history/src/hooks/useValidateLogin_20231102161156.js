import axios from 'axios';

export const validateLogin = async (userName, password) => {
  const url = 'http://195.35.37.48:5000/login';
  const loginData = {
    username: userName,
    password: password,
  };

  try {
    const response = await axios.post(
      url,
      loginData, // Send the login data as the request body
      {
        headers: {
          'Content-Type': 'application/json',
          // 'withCredentials': 'true'
        },
        withCredentials: true, // Preserve cookies and session data
      }
    );

    const setCookieHeader = response.headers['set-cookie'];
    if (setCookieHeader) {
      // Extract the 'JSESSIONID' value from the 'Set-Cookie' header
      const matches = setCookieHeader[0].match(/JSESSIONID=([^;]+)/);
      if (matches) {
        const jsessionId = matches[1];
        console.log(`JSESSIONID: ${jsessionId}`);
      }
    } else {
      console.log('No JSESSIONID found in response headers');
    }

    return response.data;
  } catch (error) {
    throw new Error(`Request failed with status ${error.response.status}`);
  }
};
