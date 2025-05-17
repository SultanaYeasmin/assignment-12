import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import ParcelDataRow from '../../../components/Dashboard/TableRows/ParcelDataRow';

const AllParcels = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], isLoading, refetch } = useQuery({
        queryKey: ['parcels'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-parcels');
            return data;
        }
    }
    )
    console.log(parcels)
    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            <Helmet>
                <title> All Parcels | Dashboard</title>
            </Helmet>

            <div className='text-center my-10 text-blue-600'>
                All Parcels
            </div>
            <div className="overflow-x-auto p-5">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>SL#</th>
                            <th>User Name</th>
                            <th>Phone#</th>
                            <th>Booking Date</th>
                            <th>Req. Delivery Date</th>

                            <th>Cost</th>
                            <th>Status</th>
                            <th>Manage</th>

                        </tr>
                    </thead>
                    <tbody>
                        {parcels &&

                            parcels.map((parcel, index) => (
                                <ParcelDataRow

                                    index={index}
                                    key={parcel._id}
                                    parcel={parcel}
                                />)

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllParcels;