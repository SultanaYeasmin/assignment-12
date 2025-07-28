import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"

export default function useParcelsStats() {
const axiosSecure = useAxiosSecure();
    const { data: stats = {}, isLoading, error } = useQuery({
        queryKey: ['parcelsStats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/parcels-statistics')
            return data
        }

    })

    // console.log(deliveryMen)
    return {stats, isLoading, error}
}