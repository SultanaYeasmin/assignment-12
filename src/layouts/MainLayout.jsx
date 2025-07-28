import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;