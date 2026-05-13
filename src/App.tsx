import { Routes,Route } from "react-router-dom"
import {Login} from "./Components/Login"
import { useUserContext } from "./Context/UserContext"
import {Home} from "./Pages/Home"

export const App =():any=>{
const {users}=useUserContext();

  return (
    <Routes>
      <Route
        path="/"
        element={users ? <Home /> : <Login />}
      />
    </Routes>)
}

export default App
