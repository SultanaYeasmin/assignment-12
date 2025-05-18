import React from 'react';
import ManageParcelsModal from '../../Modal/ManageParcelModal';

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
                <td><button 
                type="button" 
                className=''>
                    <ManageParcelsModal/>
                    </button></td>

            </tr>
        </>
    );
};

export default ParcelDataRow;