import {createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(!!localStorage.getItem("token")); // the !! converts the token into boolean ,this is commonly used 

    return <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>

}

export {AuthContext,AuthProvider};