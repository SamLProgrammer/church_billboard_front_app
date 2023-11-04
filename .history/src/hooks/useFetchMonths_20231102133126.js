import axios from 'axios';

export const fetchMonths = async () => {
  const sessionToken = localStorage.getItem('sessionToken');
  console.log('retrieving months with: ' + sessionToken);
  const url = 'http://195.35.37.48:5000/months';

  try {
    const response = await axios.post(
      url,
      null, // Request body is empty because you're not sending any data
      {
        headers: {
          'Content-Type': 'application/json',
          'CustomAuth': sessionToken,
        },
        withCredentials: true, // This preserves cookies and session data
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(`Request failed with status ${error.response.status}`);
  }
};
