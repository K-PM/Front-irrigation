import React from "react";
import Icono from "../images/V1.png";
import '../style-sheets/logincomponet.css';

function logincomponet() {
    


    return (
        <>
       <img src={Icono}></img>
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

export default logincomponet;