import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import useAuth from "../../hooks/useAuth";

export default function Logout() {
    const { user, signOutUser, loading } = useAuth();
    const navigate = useNavigate();
    //console.log(user);


    if (loading) return <LoadingSpinner />
    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                // Sign-out successful.
                navigate('/')
                toast.success("you are signed-out!")
            }).catch((error) => {
                // An error happened.
                toast.error(error.message)
            });
    }
    return (
        <div>
            <button 
            className='btn btn-sm mt-3 text-green-100 btn-accent
             hover:text-white transition-colors' onClick={handleLogOut}>
                <FaSignOutAlt />
                Logout
            </button>



        </div>
    )
}