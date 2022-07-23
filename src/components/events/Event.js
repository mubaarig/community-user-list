import React from 'react'

const Event = () => {
    return (
        <div>
            <h2> The incoming events </h2>
            <table>
                <caption>Event Summary<h2></h2></caption>
                <thead>
                    <tr>
                        <th scope="col">Event </th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Event Location</th>
                        <th scope="col">Period</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Event">Visa - 3412</td>
                        <td data-label="Due Date">04/01/2016</td>
                        <td data-label="Event Location">$1,190</td>
                        <td data-label="Period">03/01/2016 - 03/31/2016</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Account">Visa - 6076</td>
                        <td data-label="Due Date">03/01/2016</td>
                        <td data-label="Amount">$2,443</td>
                        <td data-label="Period">02/01/2016 - 02/29/2016</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Account">Corporate AMEX</td>
                        <td data-label="Due Date">03/01/2016</td>
                        <td data-label="Amount">$1,181</td>
                        <td data-label="Period">02/01/2016 - 02/29/2016</td>
                    </tr>
                    <tr>
                        <td scope="row" data-label="Acount">Visa - 3412</td>
                        <td data-label="Due Date">02/01/2016</td>
                        <td data-label="Amount">$842</td>
                        <td data-label="Period">01/01/2016 - 01/31/2016</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Event