
export const fetchMonths = async () => {
    const url = 'http://localhost:5000/items';
    
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      
      xhr.open('GET', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('items')
            const sessionId = xhr.getResponseHeader('sessionId');
            console.log('Received sessionId:', sessionId);
          resolve(xhr.responseText);
        } else {
          const error = new Error('Request failed with status ' + xhr.status);
          reject(error);
        }
      };
  
      xhr.send();
    });
  };