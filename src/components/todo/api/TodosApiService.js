import axios from "axios";


//adding a base url to stop repeatition
const apiCLient=axios.create(
    {
        baseURL:"http://localhost:8080"
    }
);


export const retrieveTodosForUser
                          =(username)=>apiCLient.get(`/username/${username}/todos`)

export const deleteTodoApi
                          =(username,id)=>apiCLient.delete(`/username/${username}/todos/${id}`)

export const retrieveTodoApi
                          =(username,id)=>apiCLient.get(`/username/${username}/todos/${id}`)

export const updateTodoApi
                          =(username,id,todo)=>apiCLient.put(`/username/${username}/todos/${id}`,todo)     
        
export const addTodoApi
                          =(username,todo)=>apiCLient.post(`/username/${username}/todos`,todo)