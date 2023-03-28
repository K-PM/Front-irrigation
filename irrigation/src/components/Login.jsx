import Icono from "../assets/image/aguaN.png";
import '../assets/css/login.css';
import { useState } from "react";

function Login() {
    
    
    const {email,setEmail}=useState('');
    const {password,setPassword}=useState('');
    
      const handleClick=(e)=>{
        e.preventDefault();
         const form={
          email: email,
          password: password
        }
        socket.emit('login', form);
        console.log("login enviado")
      }

    return (
        <>
       <img className="aguaN" src={Icono}></img>
        <div className="po">
            <h2>I2P_URI</h2>
            <div className="box">
            <form>
                <input className="input" type="Email" placeholder="Email"  onChange={e=>setEmail(e.target.value)}/>
                <input className="input" type="password" placeholder="password"  onChange={e=>setPassword(e.target.value)} />
                <button className="button" onClick={handleClick}>Log In</button>
                <button className="button2"> Register </button>
            </form>
            </div>
        </div>
        </>
     );
}

export default Login;