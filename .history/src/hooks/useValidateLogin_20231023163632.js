import Cookies from 'js-cookie';

export const validateLogin = async (userName, password) => {
  const url = 'http://localhost:5000/add';
  const itemData = {
    item: userName + password,
  };
  const data = JSON.stringify(itemData);

  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true; // Enable sending cookies
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("add");
        const sessionId = Cookies.get('JSESSIONID'); // Replace with your session cookie name
        console.log('Received sessionId:', sessionId);

        resolve(xhr.responseText);
      } else {
        const error = new Error('Request failed with status ' + xhr.status);
        reject(error);
      }
    };

    xhr.send(data);
  });
};





