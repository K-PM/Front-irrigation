import React from "react";
import Icono from "../images/aguaN.png";
import '../style-sheets/registro.css';
function Registro() {
    return (
        <>
       <img className="aguaN" src={Icono}></img>
       <div className="po">
            <h2>I2P_URI</h2>
            <div className="caja">
            <form>
                <input className="entrada" type="Email" placeholder="Email"/>
                <input className="entrada" type="text" placeholder="Username" />
                <input className="entrada" type="password" placeholder="password" />
                <button className="button">Sing Up</button>
                <button className="button2">Sing In </button>
            </form>
            </div>
        </div>
        </>
     );
}

export default Registro;