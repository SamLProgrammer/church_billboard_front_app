
export const fetchMonthFamilyEvents = async ( month ) => {
    const sessionToken = localStorage.getItem('sessionToken');
    const url = 'https://localhost:5000/monthData';
    // const url = 'https://www.mysqlconnectornoderaged.com/monthData';

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include', 
        headers: {
            'Content-Type': 'application/json',
            'CustomAuth': sessionToken, 
        },
        body: month,
    });

    if (response.ok) {
        return await response.text();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
};
