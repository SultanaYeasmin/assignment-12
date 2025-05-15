import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';



const DashboardLayout = () => {
   
    return (
        <div className='flex'>
            <div>
                <Sidebar className="w-1/3"></Sidebar>
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>

        </div>
    );
};

export default DashboardLayout;