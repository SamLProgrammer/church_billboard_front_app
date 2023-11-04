export const fetchMonths = async (sessionToken) => {
    console.log('token: ', sessionToken);
    const url = 'http://localhost:5000/months';

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include', // Send cookies with the request
        headers: {
            'Content-Type': 'application/json',
            'CustomAuth': sessionToken, // Add your custom header here
        },
    });

    if (response.ok) {
        const sessionId = response.headers.get('sessionId');
        console.log('Received sessionId:', sessionId);
        return await response.text();
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }

};