import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import AdminMenu from "./Menu/AdminMenu";
import DeliveryMen from "./Menu/DeliveryMen";
import UserMenu from "./Menu/UserMenu";


const Sidebar = () => {
    const [role, isLoading ] = useRole();
    if (isLoading) return <LoadingSpinner />
    return (
        <div className="w-64 min-h-screen bg-red-200">
            {/* sidebar items */}
            <ul className="menu p-4">
                {role === 'User' && <UserMenu />}
                {role === 'Delivery Man' && <DeliveryMen />}
                {role === 'Admin' && <AdminMenu />}




            </ul>



        </div>
    );
};

export default Sidebar;