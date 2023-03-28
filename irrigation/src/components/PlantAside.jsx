import "../assets/css/PlantAside.css";
import user from '../assets/image/USER.png';
import logOut from '../assets/image/logoutB.png'

function PlantAside() {
    return (
        <aside className="plant-aside">
            <div>
                <img src={user} className="users"/>
                <h3>Mauricio Castillo</h3>
                <img src={logOut} className="logoutLogo"/>
            </div> 
            <a href="/logout" className="logout">Log out</a>
        </aside>
    );
}

export default PlantAside;