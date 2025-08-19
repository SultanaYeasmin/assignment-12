import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';


const DashboardLayout = () => {
   
    return (
        
        <div className='relative min-h-screen md:flex'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="flex-1 lg:ml-64">
                <div className='md:p-6 p-2'>
                     <Outlet />
                </div>
               
            </div>

        </div>
    );
};

export default DashboardLayout;