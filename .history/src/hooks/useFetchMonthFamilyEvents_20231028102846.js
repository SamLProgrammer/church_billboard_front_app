
export const useFetchMonthFamilyEvents = async ( month, sessionToken ) => {
    console.log('token: ', sessionToken);
    const url = 'http://localhost:5000/months';

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
        console.log(response.text());
        console.log(JSON.parse(response.text()));
        return await response.text();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
};
