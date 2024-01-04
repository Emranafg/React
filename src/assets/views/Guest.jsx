import { Outlet } from "react-router-dom";
export default function guest() {
    return(
        <div>
            <h1>This is the Guest Layout</h1>
            <Outlet />
        </div>
    )
}
