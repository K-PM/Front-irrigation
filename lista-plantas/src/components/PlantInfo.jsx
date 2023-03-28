import React from "react";
//import '../style-sheets/PlantInfo.css'


const PlantInfo = ({imageSrc, ima2, ima3}) => {
  const date = new Date();

  return (
    <div className="plant-info-container">
      <div className="plant-column">
        <img src={imageSrc} alt="Plant" className="logo-planta1"/>
        <h1 className="div-humedad">Planta</h1>
      </div>
      
      <div className="plant-column">
        <div className="plant-row">
        <img src={ima2} alt="Plant" className="logo-planta"/>
          <h2 className="div-humedad">Su Humedad Adecuada Es  50% - 60%</h2>
          
        </div>
        
      </div>
      <div className="plant-column">
        <img src={ima3} alt="Clock"  className="logo-planta3"/>
        <h2 className="datetime">{date.toLocaleDateString()}</h2>
      </div>
    </div>
  );
}

export default PlantInfo;
