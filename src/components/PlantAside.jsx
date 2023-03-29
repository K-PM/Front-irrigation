import "../assets/css/PlantAside.css";
import userDefault from "../assets/image/USER.png";
import logOut from "../assets/image/logoutB.png";
import userNoDefaul from "../assets/image/aguaN.png";
import {UseUser} from "../context/UserProvider"
import { useState } from "react";
import { useEffect } from "react";
import userprofile from "../assets/image/USER.png"

function PlantAside() {
    const [user, setUser]= useState([]);

    useEffect(()=>{
      setUser({
        name: 'juan',
        profilePicture: userprofile
      })
    },[]);

    const handleClick=()=>{
        navigate('/home')
    }
    
  return (
    <aside className="plant-aside">
      <div>
        <img src={user.profilePicture!=""?user.profilePicture : userDefault} className="users" />
        <h3>${user.name}</h3>
        //aqui tiene que ir un input de tipo file
        <img src={logOut} className="logoutLogo" />
      </div>
      <input
        type="buttom"
        onClick={handleClick}
        value="Log out"
        className="logout"
      ></input>
    </aside>
  );
}

export default PlantAside;
