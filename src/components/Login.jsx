import Icono from "../assets/image/aguaN.png";
import '../assets/css/login.css';
import { useState } from "react";
import {UseUser} from "../context/UserProvider";

 

function Login() {
      const {login}=UseUser();
    
  
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState();
    
      const handleSubmit=async(e)=>{
        e.preventDefault();
         const form={
          email: email,
          password: password
        }
        login(form);
      }

    return (
        <>
       <img className="aguaN" src={Icono}></img>
        <div className="po">
            <h2>I2P_URI</h2>
            <div className="box">
            <form onSubmit={handleSubmit}>
                <input className="input" type="Email" placeholder='email'  onChange={e=>setEmail(e.target.value)}/>
                <input className="input" type="password" placeholder="password"  onChange={e=>setPassword(e.target.value)} />
                <input type="submit" className="button" value="sing up"></input>
                <button className="button2"> Register </button>
            </form>
            </div>
          </div>
        </>
     );
}

export default Login;