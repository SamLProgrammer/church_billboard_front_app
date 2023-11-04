export const fetchMonths = async () => {
    const url = 'http://localhost:5000/months';

    try {
        const response = await fetch(url, {
            method: 'GET',
            // credentials: 'include', // Send cookies with the request
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const sessionId = response.headers.get('sessionId');
            console.log('Received sessionId:', sessionId);
            return await response.text();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        throw new Error('Request failed: ' + error.message);
    }
};