import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DeliveryManDataRow from '../../../components/Dashboard/TableRows/DeliveryManDataRow';
import useAllDeliveryMen from '../../../hooks/useAllDeliveryMen';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const AllDeliveryMen = () => {
    const { user, loading } = useAuth();

    const { deliveryMen, isLoading, error } = useAllDeliveryMen();
    console.log(deliveryMen)
    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <Helmet>
                <title> All Delivery Men | Dashboard</title>
            </Helmet>

            <div className='text-center my-10 text-blue-600'>
                All Delivery Men
            </div>
            <div className="overflow-x-auto p-5">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>SL#</th>
                            <th>Delivery Man's Name</th>
                            <th>Phone#</th>
                            <th>Delivered Parcels#</th>
                            <th>Average review</th>

                        </tr>
                    </thead>
                    <tbody>
                        {deliveryMen &&

                            deliveryMen?.map((person, index) => (

                                <DeliveryManDataRow
                                    index={index}
                                    person={person}
                                    key={person._id}

                                />)

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDeliveryMen;