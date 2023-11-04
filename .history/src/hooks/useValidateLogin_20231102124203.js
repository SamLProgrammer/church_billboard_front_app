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
    const headers = response.headers; // Get the headers object

    // Log the headers
    console.log("Response Headers:");
    headers.forEach((value, name) => {
      console.log(`${name}: ${value}`);
    });

    // Access and log cookies specifically
    const cookies = headers.get('set-cookie');
    if (cookies) {
      console.log("Cookies:");
      console.log(cookies);
    }
    return await response.text();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}
