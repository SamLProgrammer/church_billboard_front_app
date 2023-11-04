export const validateLogin = async (userName, password) => {
  console.log('will send: ');
  console.log(userName);
  console.log(password);
  const url = 'http://www.localhost.com:5000/login';
  var xhr = new XMLHttpRequest();
  var data = JSON.stringify({ username: userName, password: password }); 

  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.responseText);
    } else {
      console.error('Request failed with status ' + xhr.status);
    }
  };

  xhr.send(data);
}