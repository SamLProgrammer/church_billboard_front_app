export const validateLogin = async (userName, password) => {
  const url = 'http://195.35.37.48:5000/login';
  const data = JSON.stringify({ username: userName, password: password });
  
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'tubili tubili');
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        const error = new Error('Request failed with status ' + xhr.status);
        reject(error);
      }
    };

    xhr.send(data);
  });
};