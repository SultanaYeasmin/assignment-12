import React from 'react';
import { RiSendPlane2Line } from 'react-icons/ri';
import { TfiPackage } from 'react-icons/tfi';
import { FaUser } from "react-icons/fa";
import Menu from './Menu';

const UserMenu = () => {
    return (
        <div>
            <div>
                <Menu menu="Book a parcel" path="book-parcel" icon={RiSendPlane2Line}></Menu>
                <Menu menu="My Parcels" path="my-parcels" icon={TfiPackage}></Menu>
                <Menu menu="My Profile" path="my-profile" icon={FaUser}></Menu>

            </div>
        </div>
    );
};

export default UserMenu;
//user-routes



