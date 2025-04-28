import React from 'react';
import error from "../../assets/error.jpg"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <> 
        <div className='h-[450px] flex justify-center'>
        <img 
        className='h-full'
        src={error} alt="error" />
          </div>
          <div className='flex justify-center mb-5'>
           <Link to="/"> <button className='btn bg-yellow-400 block text-black font-extrabold'>Back to Home</button></Link>
          </div>
 
    </>
       
    );
};

export default ErrorPage;