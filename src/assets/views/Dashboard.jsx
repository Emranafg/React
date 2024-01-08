import {Navigate, Outlet,Link } from "react-router-dom";
import {useStateContext} from "../handler/ContextProvider.jsx";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";

export default function dashboard() {
    const {token} = useStateContext()
    if (!token) {
        return <Navigate to="/login" />;
    }

   

    return(
    
      


    

    
     
       
        <div className="row g-0" style={{height:'100%'}}>
        <div className="col-xl-2 col-lg-2 col-md-2 d-sm-none d-md-block" style={{height:'100%'}}>
        <Sidebar />
        </div>

        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 " style={{height:'100%'}}>
            <div className="row g-0">
            <Header />
            </div>
            <div className="row g-0">
            
            <Outlet />
         </div>
            
        </div>
         
            
            
     
    
      </div>
    
      
      
    )
}
