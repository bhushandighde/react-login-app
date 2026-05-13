import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {UserContextProvider} from './Context/UserContext.tsx'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
    <UserContextProvider>
    <App/>
    </UserContextProvider> 
    </BrowserRouter>  
  </StrictMode>,
)
