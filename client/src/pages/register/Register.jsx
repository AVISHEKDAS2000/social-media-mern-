import React from 'react';
import "./register.css";
import {useRef} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Register(props) {
    const email=useRef();
    const username =useRef();
    const password=useRef();
    const passwordAgain=useRef();
    const navigate=useNavigate();


    const handleClick= async(e)=>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value)
            password.current.setCustomValidity("Passwords don't match");
        else
        {
            const user={
                username:username.current.value,
                password:password.current.value,
                email:email.current.value,
            };
            try{
                await axios.post("/auth/register",user);
                //console.log("Done");
                navigate("/login");
            }
            catch(err){
                console.log(err.response.data);
            }
            
        }    
           // console.log("Don't match");
    }

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
                 <div className="loginRight">
                     <form className="loginBox" onSubmit={handleClick}>
                         <input placeholder="Username" ref={username} className='loginInput' required/>
                         <input placeholder="Email" ref={email} className='loginInput' type="email" required/>
                         <input placeholder="Password" ref={password} className='loginInput' 
                         minLength="6" type="password" required/>
                         <input placeholder="Password Again" ref={passwordAgain} className='loginInput' 
                         minLength="6" type="password" required/>
                         <button className="loginButton" type="submit">Sign Up</button>
                         {/* <span className="loginForgot">Forgot Password?</span> */}
                         <button className="loginRegisterButton">Log into your account</button>
                     </form>
                 </div>
             </div>           
        </div>
    );
}

export default Register;