import SocialLogin from "../../components/shared/SocialLogin"
import { Link } from 'react-router-dom';
import  './Login.css'
const Login = () => {
    return (
        <div className="hero my-5" id="login">
        <div className="hero-content flex-col">
                  
          <div className="card w-full max-w-3xl shrink-0 shadow-2xl">
            <form className="card-body">
            <h1 className="text-xl font-bold text-center">Sign-in now!</h1>
            <p className="text-gray-400 text-center text-sm">
              Login to visit your own account
            </p>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary ">Login</button>
              </div>
              <SocialLogin/>
             <p className='text-gray-400 px-8'>
             Don't have an account yet? <Link to='/sign-up'><span className='text-gray-600'>Sign up</span></Link>
             </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;