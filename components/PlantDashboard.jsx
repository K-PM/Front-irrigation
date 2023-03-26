import React from "react";
import PlantCard from "./PlantCard";
import PlantAside from "./PlantAside";
import '../style-sheets/PlantDashBoard.css'
import logo2 from '../images/logos2.png';
import agualogo from '../images/agualogo.png';

class PlantDashboard extends React.Component {
  render() {
    return (
      <div className="plant-dashboard">
        <PlantAside />
        <div className="plant-cards">
          <PlantCard
            image={logo2}
            title="PLANTA"
            percentage="50%"
            date="26 de marzo de 2023"
          />
          <PlantCard
            image={logo2}
            title="PLANTA"
            percentage="50%"
            date="26 de marzo de 2023"
          />
          {/* Aqui se añaden más CARD Con un condicional */}
  
        </div>
      </div>
    );
  }
}

export default PlantDashboard;
