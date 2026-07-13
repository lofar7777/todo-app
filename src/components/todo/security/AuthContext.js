import { createContext, useContext, useState } from "react";


 export const AuthContext=createContext()

export const useAuth= ()=>useContext(AuthContext)
  

export default function AuthProvider({children}){
    const[number,setNumber]=useState(10 )
    const[isAuthenticated,SetAuthenticated]=useState(false)

    // setInterval(()=>setNumber(number+1),10000)
    const valueTobeShared={number,isAuthenticated,SetAuthenticated};//this is not recommended we use shorthand instead like below

    function login(username,password){
      if (username.trim() !== "" && password === "dummy") {
       SetAuthenticated(true)
      return true
     
    } else {
      SetAuthenticated(false)
      return false
    }
  }

    
    return(
        <AuthContext.Provider value={{number,isAuthenticated,SetAuthenticated,login}}>
            {children}
        </AuthContext.Provider>

    )
}