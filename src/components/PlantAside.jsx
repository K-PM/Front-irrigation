import "../assets/css/PlantAside.css";
import userDefault from "../assets/image/USER.png";
import logOut from "../assets/image/logoutB.png";
import {UseUser} from "../context/UserProvider"

function PlantAside() {
    const {logout, user}=UseUser();


    const handleClick=()=>{
        logout();
        navigate('/home')
    }
    
  return (
    <aside className="plant-aside">
      <div>
        <img src={user.profilePicture!=""?user.profilePicture : userDefault} className="users" />
        <h3>${user.name}</h3>
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
