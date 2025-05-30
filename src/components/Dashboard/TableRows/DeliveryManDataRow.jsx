import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const DeliveryManDataRow = ({ index, person }) => {

    const axiosSecure = useAxiosSecure();
    console.log(person, "person")
    const { name, email, phone, _id } = person || {};
    //  console.log(typeof _id)
    const { data: noOfDeliveredParcels = [],
        isLoading, error } = useQuery({
            queryKey: ['noOfDeliveredParcels', email],
            queryFn: async () => {
                const { data } = await axiosSecure.get(`/all-parcels?delivery_man_ID=${_id}&status=Delivered`);
                // console.log(data.count)
                return data.count;
            }

        })
    // console.log(person)
   if (isLoading) return <LoadingSpinner />
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{phone}</td>
            {/* <td>11</td> */}
            <td>
                {noOfDeliveredParcels > 0 ? noOfDeliveredParcels : "not yet"
                }


            </td>
            <td>9</td>


        </tr>
    );
};

export default DeliveryManDataRow;