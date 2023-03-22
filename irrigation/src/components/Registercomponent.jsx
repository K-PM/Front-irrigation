import Icono from "../assets/images/regadera-WHITE.png";
import '../assets/css/register.css';
function Registercomponent() {
    return (
        <>
       <img src={Icono}></img>
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
        </>
     );
}

export default Registercomponent;