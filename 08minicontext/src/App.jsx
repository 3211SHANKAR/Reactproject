import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextProvider>
     <h1>React with Chai</h1>
     <Login/>
     <Profile/>

         </UserContextProvider>
  )
}

export default App
