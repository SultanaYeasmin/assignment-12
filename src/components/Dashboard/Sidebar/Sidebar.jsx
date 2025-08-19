import { Link } from "react-router-dom";
import useRole from "../../../hooks/useRole";
import AdminMenu from "./Menu/AdminMenu";
import DeliveryMen from "./Menu/DeliveryMen";
import UserMenu from "./Menu/UserMenu";
import Logout from "../../Shared/Logout";
import { useState } from "react";
import { AiOutlineBars } from 'react-icons/ai';
import logo from '../../../assets/logo.png';



const Sidebar = () => {
    const [role, isLoading] = useRole();
    const [isActive, setActive] = useState(false)
    // if (isLoading) return <LoadingSpinner />
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-secondary text-white flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <img
                                className='w-6 h-6'
                                src={logo}
                                alt='logo'
                                
                            />
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button text-white p-4'
                >
                    <AiOutlineBars className='' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between 
          overflow-x-hidden w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 
          transform ${isActive && '-translate-x-full'
                    } md:translate-x-0 transition duration-200 ease-in-out`}
            >
                <div className="w-full h-full bg-secondary 
                flex flex-col justify-between">
                    {/* sidebar items */}
                    <ul className="menu p-2 md:p-4 flex-1 overflow-y-auto">
                        {role === 'User' && <UserMenu />}
                        {role === 'Delivery Man' && <DeliveryMen />}
                        {role === 'Admin' && <AdminMenu />}
                    </ul>

                    <ul className="p-4 border-t border-white/20">
                        <Logout />
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Sidebar;