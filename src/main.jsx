import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout';
import Index from './pages/Index';
import Login from './pages/Login';
import Informacion from './components/Informacion'
import ServiceSection from './components/Servicios';
import ContactComponent from './components/Contacto';
import Principal from './components/Principal'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{
  path: '/inicio',
  element: <Layout/>,
  children: [
    {
      index: true,
      element: <Index/>
    },
    {
      path:'info',
      element: <Informacion/>
    },
    {
      path:'servicios',
      element:<ServiceSection/>

    },
    {
      path:"contacto",
      element:<ContactComponent/>
    }

  ]
},  
{
  path:"/",
  element:<Principal/>,
  children:[{
  index: true,
  element: <Login/>

  }]
  

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>  
  </React.StrictMode>,
)
