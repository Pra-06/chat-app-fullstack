/* import { createContext,useContext,useState } from "react";


export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext);
}


export const AuthContextProvider =({children}) => {
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    
    return <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>;
};
/* 
export const useAuthContext = () => {
    return useContext(AuthContext);
  }; */
/* 
export default AuthContext; */ 
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null); // Default to null

  useEffect(() => {
    // Fetch user authentication status from localStorage, API, etc.
    const user = localStorage.getItem("authUser"); 
    if (user) {
      setAuthUser(JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
