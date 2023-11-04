import axios from 'axios';

export const validateLogin = async (userName, password) => {
  const url = 'http://localhost:5000/login';
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
        },
        withCredentials: true, // Preserve cookies and session data
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(`Request failed with status ${error.response.status}`);
  }
};
