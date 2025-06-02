import { TbTruckDelivery } from "react-icons/tb";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";


const UserDataRow = ({ refetch, index, person, }) => {
    const axiosSecure = useAxiosSecure();
    // console.log(person)

    const { name, email, password, image, photoUrl, role, phone, _id } = person || {};

    const handleUserRole = (role) => {
        console.log(role)
        axiosSecure.patch(`/user/${_id}`, { role: role })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "role has been updated!",
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })

    }
    const { data: noOfParcelsBooked = [] } = useQuery({
        queryKey: ['noOfParcelsBooked'],
        queryFn: async () => {
            const { data } = axiosSecure.get(`/all-users/${email}`)
            return data.count;
        }
    })


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{noOfParcelsBooked}</td>
            <td></td>
            <td>{role}</td>
            <td >{
                role === "User"
                    ?
                    <div className="flex justify-start">
                        <button onClick={() => handleUserRole("Delivery Man")} className=""> <TbTruckDelivery className="text-blue-500" size="20" /></button></div>
                    :
                    <div className="flex justify-start">
                        <button className=""> <MdOutlineDisabledByDefault className="text-red-300" size="20" /></button>
                    </div>

            }
            </td>
            <td >{
                role === "User"
                    ?
                    <div className="flex justify-start">
                        <button onClick={() => handleUserRole("Admin")} className=""> < GrUserAdmin className="text-green-600" size="20" /></button>
                    </div>
                    :
                    <div className="flex justify-start">
                        <button className=""> <MdOutlineDisabledByDefault className="text-red-300" size="20" /></button>
                    </div>

            }
            </td>

        </tr>
    );
};

export default UserDataRow;