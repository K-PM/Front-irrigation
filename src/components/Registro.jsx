import Icono from "../assets/image/aguaN.png";
import '../assets/css/registro.css';
import { useState } from "react";

function Registro() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [username,setUsername]=useState('');

    const handleSubmit=(e)=>{
        const form={
            name: username,
            email:email,
            password: password
         }
         socket.emit('regUser', form);
    }
      

    return (
        <>
       <img className="aguaN" src={Icono}></img>
       <div className="po">
            <h2>I2P_URI</h2>
            <div className="caja">
            <form onSubmit={handleSubmit}>
                <input className="entrada" type="Email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                <input className="entrada" type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
                <input className="entrada" type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                <input type="submit" value="sing-up"></input>
                <button className="button2">Sing In </button>
            </form>
            </div>
        </div>
        </>
     );
}

export default Registro;