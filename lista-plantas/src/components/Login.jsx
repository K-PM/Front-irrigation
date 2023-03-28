import React from "react";
import Icono from "../images/aguaN.png";
import '../style-sheets/login.css';

function Login() {
    


    return (
        <>
       <img className="aguaN" src={Icono}></img>
        <div className="po">
            <h2>I2P_URI</h2>
            <div className="box">
            <form>
             <input className="input" type="Email" placeholder="Email"/>
                <input className="input" type="password" placeholder="password" />
                <button className="button">Log In</button>
                <button className="button2"> Register </button>
            </form>
            </div>
        </div>
        </>
     );
}

export default Login;