// export const fetchMonths = async (sessionToken) => {
export const fetchMonths = async () => {
    // const url = 'http://195.35.37.48:5000/months';
    const url = 'http://localhost:5000/items';
    
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      
      xhr.open('GET', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
    //   xhr.setRequestHeader('Authorization', sessionToken);
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