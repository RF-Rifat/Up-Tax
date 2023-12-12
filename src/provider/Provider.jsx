import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase";


export const AuthProvider = createContext(null);

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };


  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const AuthData = {
    createUser,
    loading,
    login,
    logOut,
    user,
    updateUser,
  };

  return (
    <AuthProvider.Provider value={AuthData}>{children}</AuthProvider.Provider>
  );
};

export default Provider;
