import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import Logout from './Logout';


const Navbar = () => {
    const { user, signOutUser, loading } = useAuth();
    return (
        <div className="navbar bg-secondary text-base-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className="mb-4 text-primary text-xl"><Link to='/'>Home</Link></li>

                        <li><div className="indicator text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-base md:text-xl font-extrabold">
                    <img src={logo} alt="logo" className='w-6 h-6 md:w-10 md:h-10 mr-0' />
                    <p className='italic text-white hover:text-base-content transition-colors'>Transito</p>
                </Link>
            </div>

            {/* //mid part */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold text-white hover:text-base-content transition-colors'><Link to='/'>Home</Link></li>

                    <li className='text-white'>
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs hover:text-base-content transition-colors indicator-item"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-6 md:w-10 rounded-full">
                                        <img
                                            alt="profile"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-primary bg-base-200">
                                    <li className='hover:text-secondary transition-colors'>
                                        <span> {user?.displayName || "User"}
                                        </span>
                                    </li>
                                    <li className='hover:text-secondary transition-colors'>
                                        <Link to='/dashboard'>Dashboard</Link>
                                    </li>
                                    <li >
                                        <Logout />
                                    </li>
                                </ul>
                            </div>

                        </>


                        :
                        <Link to='login' className="btn">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;