import React from 'react';

const DeliveryManDataRow = ({ index, person }) => {
console.log(person)
    const {name, email, password, image, photoUrl,role, phone} = person || {}
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>ll</td>
            <td>9</td>
            

        </tr>
    );
};

export default DeliveryManDataRow;