import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

interface IAuthContext {
  currentUser: any;
  signUp: any;
  logIn: any;
  logOut: any;
}

const AuthContext = React.createContext<Partial<IAuthContext>>({});

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const logIn = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logOut = () =>{
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe;
  }, [])

  const value: IAuthContext = {
    currentUser,
    signUp,
    logIn,
    logOut
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}