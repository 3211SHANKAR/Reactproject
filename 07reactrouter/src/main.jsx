import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import Github, { githubinfoloader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import { Route } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/home/Home.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[{path:"",element:<Home/>},
//       {path: "About",element:<About/>},
//        {path: "Contact",element:<Contact/>}
//     ]
//   }
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      loader={githubinfoloader}
      path='github' element={<Github/>}/>

    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
