import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import {
    useQuery,
} from '@tanstack/react-query'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { Helmet } from 'react-helmet-async';
import ErrorPage from '../../ErrorPage/ErrorPage';


const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { isLoading, error, data: myParcels = [] } = useQuery({
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
                            <th></th>
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
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;