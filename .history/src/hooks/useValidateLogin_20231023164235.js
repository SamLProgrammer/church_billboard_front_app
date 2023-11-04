export const validateLogin = async (userName, password) => {
  const url = 'http://localhost:5000/add';
  const itemData = {
    item: userName + password,
  };

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include', // Send cookies with the request
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData),
  });

  if (response.ok) {
    const sessionId = response.headers.get('sessionId');
    console.log('Received sessionId:', sessionId);
    return await response.text();
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}





