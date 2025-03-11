import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../components/shared/SocialLogin';

const SignUp = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col">
         
           
          
          <div className="card w-full max-w-3xl shrink-0 shadow-2xl">
            <form className="card-body">
            <h1 className="text-xl font-bold text-center">Sign up now!</h1>
            <p className="text-gray-400 text-center text-sm">
              Create your own account
            </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Enter your name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload your Image</span>
                </label>
               
                <input type="file" className="file-input file-input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input type="email" placeholder="Enter your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary ">Sign Up</button>
              </div>
              </form>
             <SocialLogin/>
             <p className='text-gray-400 px-8 py-6'>
             Already have an account? 
             <Link to='/login'><span className='text-gray-600 ml-4'>Login</span></Link>
             </p>
           
          </div>
        </div>
      </div>
    );
};

export default SignUp;