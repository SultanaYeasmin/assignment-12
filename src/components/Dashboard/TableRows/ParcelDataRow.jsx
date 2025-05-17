import React from 'react';

const ParcelDataRow = ({ parcel, index
}) => {
    const { name,
        phone_number,
        price,
        requested_delivery_date,
        status,
        booking_date } = parcel || {}
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{phone_number}</td>
                <td>{booking_date}</td>
                <td>{requested_delivery_date}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td><button type="button" className='btn btn-xs'>Manage</button></td>

            </tr>
        </>
    );
};

export default ParcelDataRow;