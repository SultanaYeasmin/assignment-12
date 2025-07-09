import { Link } from "react-router-dom";
import ReviewModal from "../../Modal/ReviewModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const MyParcelDataRow = ({ refetch, index, parcel }) => {

    console.log(parcel)
    const { _id, name, email, phone_number,
        parcel_type, parcel_weight, price, receiver_name,
        receiver_phone_number, address, requested_delivery_date,
        latitude, longitude, status, delivery_man_ID,
        expected_delivery_date, booking_date }
        = parcel || {}

    const axiosSecure = useAxiosSecure();
    const handleCancel = (x) => {

        console.log(x, _id)
        {
            status === "Pending" ?
                Swal.fire({
                    title: "Do you want to save the changes?",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Save",
                    denyButtonText: `Don't save`
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        axiosSecure.patch(`/parcel/${_id}`, { status: x })
                            .then(res => {
                                if (res.data.modifiedCount > 0) {
                                    refetch();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Booking cancelled",
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                }
                            })
                    } else if (result.isDenied) {
                        Swal.fire("Changes are not saved", "", "info");
                    }
                })
                : toast.error(`Delivery is ${status}! You can not cancel now!`)
        }


    }
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

                <td>
                    <div className="join join-vertical">

                        <Link to={`/dashboard/update-parcel/${_id}`}>
                            <button className="btn join-item btn-xs bg-green-100 ">Update
                            </button>
                        </Link>
                        <button
                            onClick={() => handleCancel("Cancelled")}
                            className="btn join-item 
                            btn-xs bg-red-100 ">
                            Cancel
                        </button>
                    </div>
                </td>
                <td>
                    <button
                        type="button"
                        className=''>
                        <ReviewModal
                            refetch={refetch}
                            delivery_man_ID={delivery_man_ID} />
                    </button>
                </td>
                <td>
                    <Link to={'/dashboard/payment'}>
                        <button className="btn join-item btn-xs bg-green-100 ">Pay
                        </button>
                    </Link>
                </td>
            </tr>
        </>
    );
};

export default MyParcelDataRow;