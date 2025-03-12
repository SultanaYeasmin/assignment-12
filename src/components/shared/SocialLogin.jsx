import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const {
        createUser, signIn, signInWithGoogle, updateUserProfile,
        signOutUser, loading, user, setUser, setLoading,
    } = useAuth();

    const handleGoogleSignIn = ()=> {
        signInWithGoogle()
         .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  const credential = GoogleAuthProvider.credentialFromResult(result);
                  const token = credential.accessToken;
                  // The signed-in user info.
                  const user = result.user;
                  // IdP data available using getAdditionalUserInfo(result)
                  // ...
                  toast.success("Your google account is signed in successfully!")
                }).catch((error) => {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // The email of the user's account used.
                  const email = error.customData.email;
                  // The AuthCredential type that was used.
                  const credential = GoogleAuthProvider.credentialFromError(error);
                  // ...
                  toast.error(errorMessage)
                });  
    }
    return (
        <div onClick={handleGoogleSignIn}
        className='flex justify-center flex-col px-8'>
            <div className="divider">OR</div>
            <button className='flex justify-center
             gap-4 items-center btn btn-outline text-green-500'>
                <FaGoogle/> Continue with Google account
              
            </button>
        </div>
    );
};

export default SocialLogin;