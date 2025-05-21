
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const useAllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-users')
            return data
        }

    })

    console.log(users)
    return {users, isLoading, error}
};

export default useAllUsers;