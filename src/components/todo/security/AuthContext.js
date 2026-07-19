import { createContext, useContext, useState } from "react";
import { executeBasicAuthService } from "../api/HelloWorldApiService";


 export const AuthContext=createContext()

export const useAuth= ()=>useContext(AuthContext)
  

export default function AuthProvider({children}){
    // const[number,setNumber]=useState(10 )
    const[isAuthenticated,SetAuthenticated]=useState(false)
    const[username,setUsername]=useState(null)
    const[token,setToken]=useState(null)

    // setInterval(()=>setNumber(number+1),10000)
    // const valueTobeShared={number,isAuthenticated,SetAuthenticated};//this is not recommended we use shorthand instead like below

//     function login(username,password){
//       if (username.trim() !== "" && password === "dummy") {
//        SetAuthenticated(true)
//        setUsername(username)
//       return true
     
//     } else {
//       SetAuthenticated(false)
//       setUsername(null)
//       return false
//     }
//   }
async function login(username,password){
const baToken='Basic '+ window.btoa(username+":"+password)

try{
 const response=await executeBasicAuthService(baToken)
if (response.status==200) {
       SetAuthenticated(true)
       setUsername(username)
       setToken(baToken)
      return true
     
    } else {
      logout()  
      return false
    }
}catch(error){
      logout()
      return false
}
  }

function logout(){
        SetAuthenticated(false)
        setToken(null)
        setUsername(null)
    }


    
    return(
        <AuthContext.Provider value={{isAuthenticated,SetAuthenticated,login,username,token,logout}}>
            {children}
        </AuthContext.Provider>

    )
}