// import { useResponse } from "./hooks/useResponse";

export const fetchMonths = async (customAuth) => {
    // const auxResponse = response;
    // const { response } = useResponse();
    const url = 'http://localhost:5000/months';

    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include', // Send cookies with the request
            headers: {
                'Content-Type': 'application/json',
                'CustomAuth': customAuth, // Add your custom header here
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