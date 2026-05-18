import type { LoginCreds } from "../Types/LoginCreds";
export const AuthenticateUserService=async(loginData:LoginCreds)=>{


try{

    const response =await fetch("https://localhost:44325/api/Auth/login",{
    method:"POST",
        headers: {
      "Content-Type": "application/json"
    },
   body: JSON.stringify(loginData)
    })
  
    if (!response.ok) {
      throw new Error("Login failed");
    }
    

   const data = await response.json();

    console.log("Success:", data);
    return data;

  } catch (error) {
    console.log("Error:", error);
  }

  
}


export default AuthenticateUserService;