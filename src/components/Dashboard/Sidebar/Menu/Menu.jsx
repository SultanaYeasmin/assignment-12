import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({icon:Icon, path, menu}) => {
    return (
        <div className='flex '>
            <NavLink 
            to={path}
            className={
                ({isActive})=> `${isActive ? 'text-blue-500': 'text-green-400' }`
            }
            >
                <Icon className="w-5 h-5"/>
                <span>{menu}</span>
            </NavLink>
        </div>
    );
};

export default Menu;