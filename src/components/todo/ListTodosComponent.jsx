
export default function ListTodosComponent(){

    const today =new Date()
    const targetdate=new Date(today.getFullYear()+10,today.getMonth(),today.getDate())

    const todos=[{id:1,description:'Learn AWS' ,done:false,targetdate:targetdate},
                {id:2,description:'Learn Full Stack',done:false,targetdate:targetdate},
                {id:3,description:'Learn React',done:false,targetdate:targetdate}
    ]

    return(
        <div className="container">
        <h1>Thing you want to do!</h1>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>is done?</td>
                        <td>targetdate</td>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(
                        todo=>(
                        <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetdate.toDateString()}</td>
                    </tr>
                        )
                    )
                    }
                     
                </tbody>
            </table>
        </div>
        </div>
    )
}