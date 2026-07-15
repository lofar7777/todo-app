import axios from "axios";


//adding a base url to stop repeatition
const apiCLient=axios.create(
    {
        baseURL:"http://localhost:8080"
    }
);


export const retrieveTodosForUser
                          =(username)=>apiCLient.get(`/username/${username}/todos`)