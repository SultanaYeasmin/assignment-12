import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({icon:Icon, path, menu}) => {
    return (
       
            <NavLink 
            to={path}
            className={
                ({isActive})=> `${isActive ? 'text-white': 'text-green-400' }`
            }
            >
               <div className='flex justify-start gap-3 my-5'>
                 <Icon className="w-5 h-5"/>
                <span>{menu}</span>
               </div>
            </NavLink>
        
    );
};

export default Menu;