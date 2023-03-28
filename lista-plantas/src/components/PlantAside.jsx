import React from "react";
import "../style-sheets/PlantAside.css";
import user from '../images/USER.png';
import logOut from '../images/logoutB.png'

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
