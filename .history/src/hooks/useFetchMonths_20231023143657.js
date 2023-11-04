export const fetchMonths = async (sessionToken) => {
    const url = 'http://localhost:5000/months';
    
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Authorization', sessionToken);
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          const error = new Error('Request failed with status ' + xhr.status);
          reject(error);
        }
      };
  
      xhr.send();
    });
  };