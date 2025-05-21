
import UserDataRow from '../../../components/Dashboard/TableRows/UserDataRow';
import useAllUsers from '../../../hooks/useAllUsers';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { GrUserAdmin } from "react-icons/gr";

const AllUsers = () => {
    const { user, loading } = useAuth();

    const { users, isLoading, error, refetch } = useAllUsers();
    console.log(users)

    if (isLoading) return <LoadingSpinner />
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
                                    index={index}
                                    person={person}
                                    key={person._id}

                                />)

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
