import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import '../styles/Principal.css'

function Layout() {
  return (
    <div className="principal">
     <Outlet/>
     <Footer/>
    </div>
   
  )
}

export default Layout