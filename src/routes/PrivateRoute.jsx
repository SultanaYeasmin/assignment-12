
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import LoadingSpinner from "../components/Shared/LoadingSpinner";


const PrivateRoute = ({children}) => {

 const { user, loading } = useAuth();
const location = useLocation();

if(user) return children;

if(loading) return <LoadingSpinner/>

    return (
        <div>
            <Navigate
            to="/login"
            state={{from: location}} replace
            >

            </Navigate>
        </div>
    );
};

export default PrivateRoute;