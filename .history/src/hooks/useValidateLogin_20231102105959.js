export const validateLogin = async (userName, password) => {
  const url = 'http://195.35.37.48:5000/login';
  const loginData = {
    username: userName,
    password: password,
  };

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  if (response.ok) {
    const setCookieHeader = response.headers.get('Set-Cookie');
      if (setCookieHeader) {
        // Extract the 'JSESSIONID' value from the 'Set-Cookie' header
        const matches = setCookieHeader.match(/JSESSIONID=([^;]+)/);
        if (matches) {
          const jsessionId = matches[1];
          // Now you have the JSESSIONID
          console.log(`JSESSIONID: ${jsessionId}`);
        }
      } else {
        console.log('xd');
      }
    return await response.text();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}
