export const validateLogin = async (userName, password) => {
  const url = 'http://localhost:5000/login';
  const loginData = {
    username: userName,
    password: password,
  };

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  if (response.ok) {
    const sessionId = response.headers.get('sessionId');
    console.log('Received sessionId:', sessionId);
    return await response.text();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}
