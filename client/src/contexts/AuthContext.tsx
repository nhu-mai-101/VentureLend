import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

interface IAuthContext {
  currentUser: string;
  signUp: any;
}

const AuthContext = React.createContext<Partial<IAuthContext>>({});

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<string>('')

  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    })
    return unsubscribe;
  }, [])


  const value: IAuthContext = {
    currentUser,
    signUp
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}