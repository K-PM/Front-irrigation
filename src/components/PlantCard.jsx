import React from "react";
import '../style-sheets/PlantCard.css'


class PlantCard extends React.Component {
    render() {
    const { image, title, percentage, date } = this.props; // Recibe las props que necesitas para personalizar tu componente

    return (
        <div className="plant-card">
            <img src={image} alt={title} className='logo-planta'/>
            <h2>{title}</h2>
            <div className="details">
                {/* <img src="ruta/a/la/imagen2" alt="porcentaje" /> */}
                <h2>{percentage}</h2></div>
            <div className="details2">
                {/* <img src="ruta/a/la/imagen3" alt="fecha" /> */}
                <h2>{date}</h2>
            </div>
        </div>
        );
    }
}

export default PlantCard;
