import React from 'react';
import OurTable from "./Components/Table/OurTable";

function App() {
    const rows = new Array({
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296',
        address: {
            streetAddress: '9792 Mattis Ct',
            city: 'Waukesha',
            state: 'WI',
            zip: '22178'
        },
        description: 'et lacus magna dolor...',
    })
    for (let i = 0; i <= 10; i++) {
        rows[i].id = rows[i].id + i
        const row = rows[i]
        rows.push(row)
    }

    return (
        <div className="App">
            <OurTable rows={rows}/>
        </div>
    );
}

export default App;
