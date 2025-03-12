import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../components/shared/SocialLogin';
import { imageUpload } from '../api/utils';
import useAuth from "../hooks/useAuth"
import toast from 'react-hot-toast';
const SignUp = () => {
  const {
    createUser, signIn, signInWithGoogle, updateUserProfile,
    signOutUser, loading, user, setUser, setLoading,
} = useAuth();
const navigate = useNavigate();

  const handleSignUp = async event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const photoUrl = await imageUpload(image)
    console.log({ name, email, password, image, photoUrl })
     createUser  (email, password)  
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                updateUserProfile(name, photoUrl)
                .then(() => {
                      // Profile updated!
                      console.log(user);
                      navigate('/')
                      toast.success("sign-up successfully done!")
                    }).catch((error) => {
                      toast.error(error.message)
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
               console.log(error)
               toast.error(errorMessage)
            });
        }
  




  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="card w-full max-w-3xl shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignUp}>
            <h1 className="text-xl font-bold text-center">Sign up now!</h1>
            <p className="text-gray-400 text-center text-sm">
              Create your own account
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload your Image</span>
              </label>
              <input type="file" name='image' className="file-input file-input-bordered" />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input type="email" name='email' placeholder="Enter your email" 
              className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" 
              className="input input-bordered" required />

            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary ">Sign Up</button>
            </div>
          </form>
          <SocialLogin />
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