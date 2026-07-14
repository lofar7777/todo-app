import { Link,useParams } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldPathVar } from "./api/HelloWorldApiService";

export default function WelcomeComponent() {
    const {username} =useParams();
    const[message,setMessage]=useState(null)
    // console.log(username)
    function callHelloWorld(){
        // axios.get("http://localhost:8080/hello-world")
        // .then((response)=>ShowSucess(response))
        // .catch((error)=>ShowError(error))
        // .finally(()=>console.log("clean up"))

        // retrieveHelloWorld()
        // .then((response)=>ShowSucess(response))
        // .catch((error)=>ShowError(error))
        // .finally(()=>console.log("clean up"))
        
        retrieveHelloWorldPathVar("Abhishek")
        .then((response)=>ShowSucess(response))
        .catch((error)=>ShowError(error))
        .finally(()=>console.log("clean up"))

    }   
    
    function ShowSucess(response){
        console.log(response)
        setMessage(response.data.message)
    }
    function ShowError(error){
        console.log(error)
    }
  return (
     <div className="WelcomeComponent">
    <h1>Welcome {username}!</h1>
    <div>
        Mange your todo. - <Link to="/todos">Go Here</Link>
    </div>
    <div>
        <button className="btn btn-success m-5" onClick={callHelloWorld}>Call Hello World</button>
    </div>
    <div className="text-info">{message}</div>
    </div>
  )
}