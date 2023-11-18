import PropTypes from 'prop-types';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  
  const googleProvider = new GoogleAuthProvider();
  
  // Login email password 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword (auth, email, password);
  }

  // Google login 
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup (auth, googleProvider);
  }

  // User login 
  const login = (email, password) => {
    setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
  }

  // User logout 
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }

  // Update User 
  const manageProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unSubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    googleLogin,
    login,
    logout,
    manageProfile,
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
}
export default AuthProvider;