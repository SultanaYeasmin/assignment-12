import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import {
    useQuery,
} from '@tanstack/react-query'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { Helmet } from 'react-helmet-async';
import ErrorPage from '../../ErrorPage/ErrorPage';
import MyParcelDataRow from '../../../components/Dashboard/TableRows/MyParcelDataRow';


const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { isLoading, error, data: myParcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async() => {
            const { data } = await axiosSecure(`/my-parcels/${user?.email}`);
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
                                    key={parcel._id}
                                    parcel={parcel}
                                />)

                            )}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;