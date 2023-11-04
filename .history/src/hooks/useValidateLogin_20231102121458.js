export const validateLogin = async (userName, password) => {
  const url = 'http://localhost:5000/login';
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
    console.log(response.headers.get('set-cookie'));
    return await response.text();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}
