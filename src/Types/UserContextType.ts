import type { User } from "./User";
export type UserContextType={
    users: User|undefined,
    setUsers:React.Dispatch<React.SetStateAction<User | undefined>>,
    isAuthenticated:boolean

}
