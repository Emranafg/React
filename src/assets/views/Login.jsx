import { useRef, } from "react";
import { Navigate,useNavigate } from 'react-router-dom';

import axiosClient from "../handler/AxiosClient.js";
import { useStateContext } from "../handler/ContextProvider";
export default function login() {



  const navigate = useNavigate();
  const emailRef = useRef();
    const passwordRef = useRef();
    const {setUser,setToken} = useStateContext();
  const login = (ev) => {
    ev.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

   axiosClient.post('/login',payload)
   .then((response) => {
    if (response.status === 200) {
      console.warn(response)
      setUser(response.data.user)
      setToken(response.data.token)
  
      navigate('/');
    }
    else if (response.status ===202) {
      console.warn(response)
    }
    

   } )
   .catch(err => {
    const response = err.response
    
      console.warn(response)
  
   
   })
  }
    const MyComponent = () => {
        const myStyle = {
         
        };

    }

    return(
        <div>
<section className=" text-center text-lg-start">

  <div className="card mb-3">
    <div className="row g-0 d-flex align-items-center">
      <div className="col-lg-4 d-none d-lg-flex">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
          className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div className="col-lg-8">
        <div className="card-body py-5 px-md-5">

          <form onSubmit={login} method="post">
         
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" ref={emailRef} />
              <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" ref={passwordRef} />
              <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>

           
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
               
               
              </div>

              <div className="col">
              
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
