import React from "react";
import "../style-sheets/PlantAside.css";
import user from '../images/USER.png';
import logOut from '../images/logout.jpg'

function PlantAside() {
    return (
        <aside className="plant-aside">
        <div className="user-profile">
            <img
            src={user}
            alt="User Profile"
            className="user-avatar"
            />
            <h3 className="user-name">Mauricio Castillo</h3>
        </div>
        {/* XD, lo deje así porque no pude moverlo */}
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <img
            src={logOut}
            alt="Log out"
            className="logout"
        /><br></br>
        <a href="/logout" className="logout">Log out</a>
        </aside>
    );
}

export default PlantAside;
