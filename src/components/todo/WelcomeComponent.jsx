import { Link,useParams } from "react-router-dom";
export default function WelcomeComponent() {
    const {username} =useParams();
    // console.log(username)
  return (
     <div className="WelcomeComponent">
    <h1>Welcome {username}!</h1>
    <div>
        Mange your todo. - <Link to="/todos">Go Here</Link>
    </div>
    </div>
  )
}