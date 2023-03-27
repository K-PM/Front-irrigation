import React from "react";
import '../style-sheets/PlantInfo.css'
import logo2 from '../images/logos2.png';
import agualogo from '../images/agualogo.png';


const PlantInfo = ({imageSrc, humidityCurrent, humidityPrevious}) => {
  const date = new Date();

  return (
    <div className="plant-info-container">
      <div className="plant-column">
        <img src={imageSrc} alt="Plant" className="logo-planta1"/>
        <h1 className="div-primero">Planta</h1>
      </div>
      <div className="plant-column">
        <div className="plant-row">
        <img src={imageSrc} alt="Plant" className="logo-planta"/>
          <h2 className="div-humedad">HUMEDAD ACTUAL<h2 className="humedad">{humidityCurrent}%</h2></h2>
          
        </div>
        <div className="plant-row">
        <img src={imageSrc} alt="Plant" className="logo-planta"/>
          <h2 className="div-humedad">HUMEDAD ANTERIOR<h2 className="humedad">{humidityPrevious}%</h2></h2>
          
        </div>
      </div>
      <div className="plant-column">
        <img src={imageSrc} alt="Clock"  className="logo-planta3"/>
        <h2 className="datetime">{date.toLocaleDateString()}</h2>
      </div>
    </div>
  );
}

export default PlantInfo;
