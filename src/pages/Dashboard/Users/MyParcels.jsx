import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import {
    useQuery,
} from '@tanstack/react-query'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { Helmet } from 'react-helmet-async';
import ErrorPage from '../../ErrorPage/ErrorPage';
import MyParcelDataRow from '../../../components/Dashboard/TableRows/MyParcelDataRow';
import { useState } from 'react';


const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [statusFilter, setStatusFilter]=useState("All")

    const { isLoading, error, data: myParcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email, statusFilter],
        queryFn: async () => {
            const { data } = await axiosSecure(`/my-parcels/${user?.email}?status=${statusFilter}`);
            return data;
        }
    })
    console.log(myParcels);

    if (isLoading) return <LoadingSpinner />
    if (error) return <ErrorPage />

    return (
        <div>
            <Helmet>
                My Parcels | Dashboard
            </Helmet>
            <div className='text-center my-10 text-blue-600'>
                My parcels
            </div>
            <div className='flex justify-center mt-5 mb-32'>
                <div className="dropdown dropdown-right">
                    <label tabIndex={0} className="btn m-1">Filter booking by status</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>setStatusFilter("All")}><a >All</a></li>
                        <li onClick={()=>setStatusFilter("Pending")}><a>Pending</a></li>
                        <li onClick={()=>setStatusFilter("On The Way")}><a>On the Way</a></li>
                        <li onClick={()=>setStatusFilter("Delivered")}><a>Delivered</a></li>
                        <li onClick={()=>setStatusFilter("Cancelled")}><a>Cancelled</a></li>
                        <li onClick={()=>setStatusFilter("Returned")}><a>Returned</a></li>
                    </ul>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>SL#</th>
                            <th>Parcel Type</th>
                            <th>Booking Date</th>
                            <th>Requested Delivery Date</th>
                            <th>Approx. Delivery Date</th>
                            <th>Delivery Men ID</th>
                            <th>Booking Status</th>
                            <th>Update/Cancel</th>
                            <th>Review</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myParcels &&
                            myParcels?.map((parcel, index) => (
                                <MyParcelDataRow
                                    refetch={refetch}
                                    index={index}
                                    parcel={parcel}
                                    key={parcel._id}
                                />)

                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;