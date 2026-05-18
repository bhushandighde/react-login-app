import { Children, createContext, useContext, useState } from "react"
import type { UserContextType } from "../Types/UserContextType"
import type { User } from "../Types/User"
import type { ReactNode } from "react";


export const UserContext =createContext <UserContextType|undefined>(undefined);
export const  UserContextProvider=({children}:{children: ReactNode})=>{
    const [users,setUsers]=useState<User|undefined>();
    
   
    const isAuthenticated=!!users;
    

    return (
        <UserContext.Provider value={{users,setUsers,isAuthenticated}}>
        {children}
        </UserContext.Provider>
    )

}

export const useUserContext =()=>{
    const context=useContext(UserContext);
    if(!context){
       throw new Error("useUserContext must be used within UserProvider");

    }
    return context;
}
