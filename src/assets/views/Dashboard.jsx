import {Navigate, Outlet,Link } from "react-router-dom";
import {useStateContext} from "../handler/ContextProvider.jsx";
import Header from "../components/Header.jsx";

export default function dashboard() {
    const {token} = useStateContext()
    if (!token) {
        return <Navigate to="/login" />;
    }

   

    return(
     

        <div>
              <Header />
              <button className="btn btn-info">hallo</button>
            <h1>This is the  dashboard {token}</h1>
            <br />
            
            
            <Link to="login">Login</Link>
            <Outlet />
        </div>
    )
}
