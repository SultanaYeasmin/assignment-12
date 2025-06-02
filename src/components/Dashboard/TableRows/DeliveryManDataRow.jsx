import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import axios from 'axios';

const DeliveryManDataRow = ({ index, person }) => {

    const axiosSecure = useAxiosSecure();
    // console.log(person, "person")
    const { name, email, phone, _id } = person || {};
    //  console.log(typeof _id)

    const { data: noOfDeliveredParcels = [],
        isLoading: isLoadingParcels, error } = useQuery({
            queryKey: ['noOfDeliveredParcels', email],
            queryFn: async () => {
                const { data } = await axiosSecure.get(`/all-parcels?delivery_man_ID=${_id}&status=Delivered`);
                // console.log(data.count)
                return data.count;
            }

        })
    // console.log(person)

    const {data: averageReview = null, isLoading: isLoadingReview} = useQuery({
        queryKey: ['averageReview', _id],
        queryFn: 
           async ()=>{
            const {data} = await axiosSecure.get (`/review/${_id}`)
            console.log(data)   
            return data.averageRating;
            }
        
    })


// if (isLoadingParcels || isLoadingReview)
//   return (
//     <div className="flex justify-center">
//       <LoadingSpinner />
//     </div>
//   );
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{phone}</td>
            {/* <td>11</td> */}
            <td>
                {noOfDeliveredParcels > 0 ? noOfDeliveredParcels : "not yet"
                }            </td>
            <td>{averageReview > 0 ? averageReview  : "not yet"}</td>


        </tr>
    );
};

export default DeliveryManDataRow;