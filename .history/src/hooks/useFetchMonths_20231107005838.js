export const fetchMonths = async () => {
    const sessionToken = localStorage.getItem('sessionToken');
    const url = 'https://www.mysqlconnectornoderaged.com/months';

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json',
            'CustomAuth': sessionToken, 
        },
    });

    if (response.ok) {
        return await response.text();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }

};