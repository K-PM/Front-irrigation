import React from "react";
import '../style-sheets/PlantCard.css'


function PlantCard ({image, title, percentage, date}){
  
    
return (
    <div className="plant-card">
        <img src={image}  className='logo-planta'/>
        <h2>{title}</h2>
        {/* <img src="ruta/a/la/imagen2" alt="porcentaje" /> */}
        <h2>{percentage}</h2>
        <h2>{date}</h2>
    </div>
    );

}

export default PlantCard;
