import React from 'react';
import Menu from './Menu';
import { LuBoxes } from 'react-icons/lu';
import { FaUsers } from 'react-icons/fa';
import { GiDeliveryDrone } from 'react-icons/gi';
import { HiOutlineChartBar } from 'react-icons/hi';

const AdminMenu = () => {
    return (
        <div>
            <Menu menu="All Parcels" path="all-parcels" icon={LuBoxes}></Menu>
            <Menu menu="All Users" path="all-users" icon={FaUsers}></Menu>
            <Menu menu="All Delivery Men" path="all-delivery-men" icon={GiDeliveryDrone}></Menu>
            <Menu menu="Statistics" path="statistics" icon={HiOutlineChartBar}></Menu>
        </div>
    );
};

export default AdminMenu;
// {icon:Icon, path, menu}
