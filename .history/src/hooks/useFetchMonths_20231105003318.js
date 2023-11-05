export const fetchMonths = async () => {
    // const sessionToken = localStorage.getItem('sessionToken');
    const url = 'https://www.mysqlconnectornoderaged.com:5000/months';

    const dummyData = {
        username: 'x',
        password: 'x',
    };
    const response = await fetch(url, {
        method: 'POST',
        // credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            // 'CustomAuth': sessionToken, 
        },
        body: JSON.stringify(dummyData),
    });

    if (response.ok) {
        return await response.text();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }

};