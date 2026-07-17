import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodosApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"

export default function TodoComponent(){

   const authContext=useAuth()
   const username=authContext.username
   const{id}=useParams()
   const[description,setDescription]=useState("")

   useEffect(
       ()=>retrieveTodo(),[id]
    )
   function retrieveTodo(){
        retrieveTodoApi(username,id)
        .then(
            response=>{console.log(response)
            setDescription(response.data.description)
            }
        )
        .catch(error=>console.log(error))

    }
    return(
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                Description:{description}
            </div>
        </div>
    )
}