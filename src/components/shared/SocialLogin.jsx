import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='flex justify-center flex-col px-8'>
            <div className="divider">OR</div>
            <button className='flex justify-center
             gap-4 items-center btn btn-outline text-green-500'>
                <FaGoogle/> Continue with Google account
              
            </button>
        </div>
    );
};

export default SocialLogin;