import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import ParcelDataRow from '../../../components/Dashboard/TableRows/ParcelDataRow';
import Search from '../../../components/Dashboard/Search/Search';
import { useState } from 'react';


const AllParcels = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [parcelsDateRange, setParcelsDateRange] = useState(null)

    const { data: parcels = [], isLoading,
        refetch } = useQuery({
            queryKey: ['parcels'],
            queryFn: async () => {
                const res = await axiosSecure.get('/all-parcels');
                console.log(res)
                return res.data.data;
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

            <Search
                parcels={parcels}
                parcelsDateRange={parcelsDateRange}
                setParcelsDateRange={setParcelsDateRange}
            />
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
                        {parcelsDateRange && parcelsDateRange.length ? parcelsDateRange.map((parcel, index) => (  <ParcelDataRow
                          
                                refetch={refetch}
                                index={index}
                                key={parcel._id}
                                parcel={parcel}
                            />)

                        ) :
                            parcels?.map((parcel, index) => (   <ParcelDataRow
                             
                                    refetch={refetch}
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