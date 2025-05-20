
import ManageParcelsModal from '../../Modal/ManageParcelModal';

const ParcelDataRow = ({ parcel, index, refetch
}) => {
    const { name,
        phone_number,
        price,_id,
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
                    <ManageParcelsModal refetch={refetch} id={_id}/>
                    </button></td>

            </tr>
        </>
    );
};

export default ParcelDataRow;