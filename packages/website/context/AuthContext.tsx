import React, { useContext, useState, useEffect, useRef } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { db, auth } from "../uitls/firebase";

const AuthContext = React.createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const userInfo = useRef();
  const signup = (email: string, password: string, name: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("hello users", res, res?.user);
        updateProfile(res?.user, {
          displayName: name || null,
        });
      })
      .catch((err) => console.log(err));
  };
  const login = (email: string, password: string, name: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubribe = onAuthStateChanged(auth, async (user) => {
      console.log("users", user);
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubribe;
  }, []);
  const value: any = {
    currentUser,
    login,
    signup,
    logout,
    userInfo,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
