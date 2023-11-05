export const validateLogin = async (userName, password) => {
  const url = 'https://www.mysqlconnectornoderaged.com/login';
  const loginData = {
    username: userName,
    password: password,
  };

  const response = await fetch(url, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });
//webhoo
  if (response.ok) {
    const sessionId = response.headers.get('sessionId');
    console.log('Received sessionId:', sessionId);
    return await response.text();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}
