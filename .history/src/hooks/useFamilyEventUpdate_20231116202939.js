
export const updateFamilyEvents = async (changedRows, type) => {
    // const sessionToken = localStorage.getItem('sessionToken');
    const adjustedChangedRows = changedRows.map((row) => {
        return {
            date: JSON.stringify(row.date),
            family: row.family,
            type
        };
    })
    console.log('adjustedChangedRows');
    console.log(adjustedChangedRows);
    const url = 'https://localhost:5000/addFamilyEvent';
    // const url = 'https://www.mysqlconnectornoderaged.com/addFamilyEvent';
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(adjustedChangedRows),
    });

    if (response.ok) {
        const jsonResponse = JSON.parse(await response.text());
        return jsonResponse;
    } else {
        throw new Error(`Request failed with status ${response.status}`);
    }
}
