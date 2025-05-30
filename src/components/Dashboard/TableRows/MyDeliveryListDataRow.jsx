import { MdDoneOutline } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyDeliveryListDataRow = ({refetch, index, parcel }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, name, email, phone_number, parcel_type, parcel_weight, price, receiver_name, receiver_phone_number, address, requested_delivery_date, latitude, longitude, status, delivery_man_ID, expected_delivery_date } = parcel || {}
    const handleParcelStatus = (status) => {
        console.log(status)
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosSecure.patch(`/all-parcels/${_id}`, { status: status })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "status has been updated!",
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                    })
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });


    }
    console.log(parcel)

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{receiver_name}</td>
            <td>{phone_number}</td>
            <td>{requested_delivery_date}</td>
            <td>{expected_delivery_date}</td>
            <td>{receiver_phone_number}</td>
            <td>{address}</td>
            <td>{ }</td>
            <td>
                {status !== "Cancelled" ? 
                <div className="flex justify-center">
                <button onClick={() => handleParcelStatus("Cancelled")} className=""> <RxCrossCircled className="text-gray-300 font-extrabold size-4" /> </button>
            </div>
             :
             <div className="flex justify-center">
                <button>  <RxCrossCircled className="text-red-700 font-extrabold size-4" /> </button>
            </div>
               }
            </td>
            <td>{
                status !== "Delivered" ? 
                <div className="flex justify-center">
                    <button onClick={() => handleParcelStatus("Delivered")} className=""><MdDoneOutline className="text-gray-300 font-extrabold size-4"  /></button>
                </div>
                 : 
                <div className="flex justify-center">
                    <button className=""><MdDoneOutline className="text-green-700 font-extrabold size-4" /></button>
                </div>

            }
            </td>



        </tr>
    );
};

export default MyDeliveryListDataRow;