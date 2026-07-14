import axios from "axios";

// export function retrieveHelloWorld(){
//     return axios.get("http://localhost:8080/hello-world-bean")
// }

//adding a base url to stop repeatition
const apiCLient=axios.create(
    {
        baseURL:"http://localhost:8080"
    }
);

//using arrow function to make it simpler
export const retrieveHelloWorld
                          =()=>apiCLient.get("/hello-world-bean")

export const retrieveHelloWorldPathVar
                          =(username)=>apiCLient.get(`/hello-world/path-variable/${username}`)