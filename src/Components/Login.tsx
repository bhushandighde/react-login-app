import {useUserContext} from "../Context/UserContext";
import User from "../JSONS/User.json";
import AuthenticateUserService from "../Services/AuthenticateUserService";
 import type { LoginCreds } from "../Types/LoginCreds";
export const Login=()=>{
  const {users}=useUserContext();
  const {setUsers}=useUserContext();

    const handleSubmit: React.FormEventHandler<HTMLFormElement>=async(e)=>{
    e.preventDefault();
    const formData =new FormData(e.currentTarget)
    const name=formData.get("username") as string
    const password=formData.get("password") as string
   
    //const matchedUser= User.find((user)=>user.name==name && user.password==password )

    const loginData: LoginCreds = {
     Email: name,
     Password:password
    };

    const  matchedUser= await AuthenticateUserService(loginData);
    
   

if (matchedUser!=null) {

  console.log("user logged in");

  setUsers(matchedUser);

} else {

  console.log("user not found");

}
  

    }
  return (
    <>
    <form onSubmit={handleSubmit}>

     <label> <h1>Login Page</h1></label>

     <label><h3>Name</h3></label>
     <input type="text" id="Name" name="username" required></input>

     <label><h3>Password</h3></label>
     <input type="text" id="password" name="password" required></input>
 
    <button type="submit">SUBMITTT</button>
    </form>
    </>
)
}

export default Login;