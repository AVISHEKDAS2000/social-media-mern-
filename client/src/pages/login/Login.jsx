import React from 'react';
import "./login.css";
import { useRef,useContext } from 'react';
import { loginCall } from '../../apiCalls';
import {createContext,useReducer}  from "react";
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
import vid1 from './vid1.mp4';
import vid2 from './vid2.mp4';
function Login(props) {
    const email=useRef();
    const password=useRef();
    const {user,isFetching,error,dispatch} =useContext(AuthContext);

    const handleClick=(e)=>{
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value},dispatch);
        //console.log(email.current.value);
    };
    //console.log(user);
    return (
        <div className='login'>
             <div className="loginWrapper">
             {/* <div >  
                  <video autoPlay muted loop className="myVideo">
    
                      <source src={vid1} type="video/mp4" />
                      
                  </video>
                </div>
                 */}
                 <div className="loginLeft">
                     <h3 className="loginLogo">PetSutra</h3>
                     <span className="loginDesc">Connect with pets all around you on PetSutra</span>
                 </div>
                 <form className="loginRight" onSubmit={handleClick}>
                     <div className="loginBox">
                         <input placeholder="Email" type="email" className='loginInput' 
                         ref={email} required/>
                         <input placeholder="Password" type="password" className='loginInput' 
                         minLength="6" ref={password} required/>
                         <button className="loginButton" type="submit" disabled={isFetching}>
                             {isFetching ? <CircularProgress color="success"/> : "Login"}
                             </button>
                         <span className="loginForgot">Forgot Password?</span>
                         <button className="loginRegisterButton">
                         {isFetching ? <CircularProgress color="success"/> :
                          "Create a New Account"}
                         </button>
                     </div>
                 </form>
             </div>           
        </div>
    );
}

export default Login