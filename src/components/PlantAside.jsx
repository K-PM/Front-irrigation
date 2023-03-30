import "../assets/css/PlantAside.css";
import userDefault from "../assets/image/USER.png";
import imgLogOut from "../assets/image/logoutB.png";
import userNoDefault from "../assets/image/aguaN.png";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseUser } from "../context/UserProvider";
UseUser

function PlantAside() {
    const {logout, user}=UseUser();
    const navigate=useNavigate();
    const [userLogin, setUserLogin]= useState([]);

    useEffect(()=>{
      setUserLogin({
        name: user.name,
        profilePicture: user.profile
      })
      console.log(user.profile)
    },[]);

    const handleClick=()=>{
        logout();
        navigate('/home');
    }
    
  return (
    <aside className="plant-aside">
      <div>
        <img src={userLogin.profilePicture!= ""? userLogin.profilePicture : userNoDefault} className="users" />
        <h3>{userLogin.name}</h3>
        <img src={imgLogOut} className="logoutLogo" />
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
