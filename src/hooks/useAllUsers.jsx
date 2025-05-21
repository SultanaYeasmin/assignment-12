
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const useAllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], isLoading, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-users')
            return data
        }

    })

    console.log(users)
    return {users, isLoading, error, refetch}
};

export default useAllUsers;