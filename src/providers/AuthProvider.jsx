import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
        // .then((userCredential) => {
        //     // Signed up 
        //     const user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        // });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

        // .then((userCredential) => {
        //   // Signed in 
        //   const user = userCredential.user;
        //   // ...
        // })
        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        // });
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)

        // .then((result) => {
        //   // This gives you a Google Access Token. You can use it to access the Google API.
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
        //   // The signed-in user info.
        //   const user = result.user;
        //   // IdP data available using getAdditionalUserInfo(result)
        //   // ...
        // }).catch((error) => {
        //   // Handle Errors here.
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   // The email of the user's account used.
        //   const email = error.customData.email;
        //   // The AuthCredential type that was used.
        //   const credential = GoogleAuthProvider.credentialFromError(error);
        //   // ...
        // });  
    }

    const signOutUser = () => {

        setLoading(true);
        return signOut(auth)
        // .then(() => {
        //     // Sign-out successful.
        //   }).catch((error) => {
        //     // An error happened.
        //   });
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
        //   .then(() => {
        //     // Profile updated!
        //     // ...
        //   }).catch((error) => {
        //     // An error occurred
        //     // ...
        //   });
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false)
            if (user) {
                setUser(user)
            } else {

                setUser(null)
            }
        });
        return () => unsubscribe();

    }, [])

    const authInfo = {
        createUser, signIn, signInWithGoogle, updateUserProfile,
        signOutUser, loading, user, setUser, setLoading,
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;