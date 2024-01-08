import {Link } from "react-router-dom";
export default function Sidebar() {
    return(
		
        <div className="bg-dark " style={{ width: '100%',height:'100%'}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4 p-3">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
         
        <Link to="/" className="nr text-white btn btn-success ">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Home</Link>
              <Link to="/users" className="nr text-white btn btn-custom ">
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Users</Link>
          
    
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    )
}

       