import { Link } from "react-router-dom";
import ReviewModal from "../../Modal/ReviewModal";


const MyParcelDataRow = ({ refetch, index, parcel }) => {
    console.log(parcel)
    const { _id, name, email, phone_number, parcel_type, parcel_weight, price, receiver_name, receiver_phone_number, address, requested_delivery_date, latitude, longitude, status, delivery_man_ID, expected_delivery_date, booking_date } = parcel || {}
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{parcel_type}</td>
                <td>{booking_date}</td>
                <td>{requested_delivery_date}</td>
                <td>{expected_delivery_date}</td>

                <td>{delivery_man_ID}</td>
                <td>{status}</td>

                <td><div className="join join-vertical">
         
                    <Link to={`/dashboard/update-parcel/${_id}`}><button className="btn join-item btn-xs bg-green-100 ">Update</button></Link>
                    <button onclick= className="btn join-item btn-xs bg-red-100">Cancel</button>

                </div></td>
                <td><button
                    type="button"
                    className=''>
                    <ReviewModal refetch={refetch} id={_id} />
                </button></td>

            </tr>
        </>
    );
};

export default MyParcelDataRow;