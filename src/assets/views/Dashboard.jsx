import {Navigate, Outlet } from "react-router-dom";
import {useStateContext} from "../handler/ContextProvider.jsx";

export default function dashboard() {
    const {token} = useStateContext()
    if (!token) {
        return <Navigate to="/login" />;
    }
    return(
       
        <div>
            <h1>This is the  dashboard {token}</h1>
            <Outlet />
        </div>
    )
}
