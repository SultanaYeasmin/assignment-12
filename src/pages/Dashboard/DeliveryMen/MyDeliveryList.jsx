

import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import MyDeliveryListDataRow from '../../../components/Dashboard/TableRows/MyDeliveryListDataRow';

const MyDeliveryList = () => {
    const { user, loading } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { data: parcels = [], isLoading, error,
        refetch } = useQuery({
            queryKey: ['parcels'],
            queryFn: async () => {
                const { data } = await axiosSecure.get(`/all-parcels/${user?.email}`);
                return data;
            }
        }
        )

    console.log(parcels)

    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <Helmet>
                <title> My Delivery List | Dashboard</title>
            </Helmet>

            <div className='text-center my-10 text-blue-600'>
                My Delivery List
            </div>
            <div className="overflow-x-auto p-5">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>SL#</th>
                            <th>User</th>
                            <th>Receiver</th>
                            <th>User’s Phone</th>
                            <th>Req.Date</th>
                            <th>Approx.Delivery</th>
                            <th>Receivers phone#</th>
                            <th>Address</th>
                            <th>Location</th>
                            <th>Cancel </th>
                            <th>Deliver </th>

                        </tr>
                    </thead>
                    <tbody>
                        {parcels &&

                            parcels?.map((parcel, index) => (

                                <MyDeliveryListDataRow
                                    refetch={refetch}
                                    index={index}
                                    parcel={parcel}
                                    key={parcel._id}

                                />)

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDeliveryList;