import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import MyReviewCard from '../../../components/Dashboard/MyReviewCard/MyReviewCard';

const MyReviews = () => {
    const { user, loading } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: myReviews = [],
        isLoading,
        error,
        refetch } = useQuery({
            queryKey: ['myReviews', user?.email],
            enabled: !loading && !!user?.email,
            queryFn: async () => {
                const { data } = await axiosSecure.get(`/my-reviews/${user?.email}`);
                return data;
            }
        }
        )

    console.log(myReviews);

    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            <Helmet>
                <title> My Reviews | Dashboard</title>
            </Helmet>
            <h1 className='text-center font-bold text-lg my-10'>My Delivery Reviews</h1>
            <div className='grid md:grid-cols-2 gap-10 px-5 justify-center md:justify-between items-center'>
                {
                    myReviews.map((review) => {
                        return <MyReviewCard
                            review={review}
                            key={review._id}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default MyReviews;

//  