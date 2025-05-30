import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllDeliveryMen = () => {
    const axiosSecure = useAxiosSecure();
    const { data: deliveryMen = [], isLoading, error } = useQuery({
        queryKey: ['deliveryMen'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/delivery-men')
            return data
        }

    })

    // console.log(deliveryMen)
    return {deliveryMen, isLoading, error}
};

export default useAllDeliveryMen;