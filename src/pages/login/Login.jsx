import SocialLogin from "../../components/Shared/SocialLogin"
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";



const Login = () => {
  const {
    createUser, signIn, signInWithGoogle, updateUserProfile,
    signOutUser, loading, user, setUser, setLoading,
  } = useAuth();
  const navigate = useNavigate();


  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password })
   signIn(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        navigate('/');
        toast.success("login successfully done!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        toast.error(errorMessage)
      });
  }
  return (
    <div className="hero my-5" id="login">
      <div className="hero-content flex-col">

        <div className="card w-full max-w-3xl shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-xl font-bold text-center">Sign-in now!</h1>
            <p className="text-gray-400 text-center text-sm">
              Login to visit your own account
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary ">Login</button>
            </div>
            <SocialLogin />
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