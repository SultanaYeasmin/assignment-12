
import UserDataRow from '../../../components/Dashboard/TableRows/UserDataRow';
import useAllUsers from '../../../hooks/useAllUsers';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { GrUserAdmin } from "react-icons/gr";
import { Pagination } from '@mui/material';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const axiosSecure = useAxiosSecure();
    const count = useLoaderData();

    const itemsPerPage = 5;
    const noOfPages = Math.ceil(count / itemsPerPage);
    // console.log();
    console.log("items per page", itemsPerPage, "no of pages ", noOfPages,"count", count);

    const { data: users = [], isLoading,
        error, refetch } = useQuery({
            queryKey: ['users', currentPage],

            queryFn: async () => {
                const { data } = await axiosSecure.get(`/all-users?page=${currentPage}&size=${itemsPerPage}`)
                return data
            }

        })
    console.log(typeof noOfPages)

    if (isLoading) return <LoadingSpinner />



    const handleChange = (event,value) => {
        setCurrentPage(value);
    };
    return (
        <div>
            <Helmet>
                <title> All Users | Dashboard</title>
            </Helmet>

            <div className='text-center my-10 text-blue-600'>
                All Users
            </div>
            <div className="overflow-x-auto p-5">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>SL#</th>
                            <th>users Name</th>
                            <th>Phone Number </th>
                            <th>Booked Parcels#</th>
                            <th>Total Spent Amount</th>
                            <th>Role</th>
                            <th>Make Delivery Men  </th>
                            <th>Make Admin  </th>

                        </tr>
                    </thead>
                    <tbody>
                        {users &&

                            users?.map((person, index) => (

                                <UserDataRow
                                    refetch={refetch}
                                    index={(currentPage - 1) * itemsPerPage + index }
                                    person={person}
                                    key={person._id}

                                />)

                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='flex justify-center flex-col items-center my-10'>
                <p className='text-sm text-gray-500 my-5'> You are now at Page no.: {currentPage}</p>
                <Pagination count={noOfPages} color="primary" page={currentPage} onChange={handleChange} />
                {/* <Pagination count={} color="primary" page={currentPage} onChange={handleChange} /> */}
            </div>
        </div>
    );
};

export default AllUsers;
