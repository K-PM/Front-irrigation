import React from "react";
import PlantCard from "./PlantCard";
import PlantAside from "./PlantAside";
import '../style-sheets/PlantDashBoard.css'

class PlantDashboard extends React.Component {
  render() {
    return (
      <div className="plant-dashboard">
        <PlantAside />
        <div className="plant-cards">
          <PlantCard
            image="ruta/a/tu/imagen1"
            title="PLANTA 1"
            percentage="50%"
            date="26 de marzo de 2023"
          />
          <PlantCard
            image="ruta/a/tu/imagen2"
            title="PLANTA 2"
            percentage="75%"
            date="26 de marzo de 2023"
          />
                      {/* <PlantCard
            image="ruta/a/tu/imagen1"
            title="PLANTA 1"
            percentage="50%"
            date="26 de marzo de 2023"
          />
          <PlantCard
            image="ruta/a/tu/imagen2"
            title="PLANTA 2"
            percentage="75%"
            date="26 de marzo de 2023"
          />
                    <PlantCard
            image="ruta/a/tu/imagen1"
            title="PLANTA 1"
            percentage="50%"
            date="26 de marzo de 2023"
          />
          <PlantCard
            image="ruta/a/tu/imagen2"
            title="PLANTA 2"
            percentage="75%"
            date="26 de marzo de 2023"
          />
                    <PlantCard
            image="ruta/a/tu/imagen1"
            title="PLANTA 1"
            percentage="50%"
            date="26 de marzo de 2023"
          />
          <PlantCard
            image="ruta/a/tu/imagen2"
            title="PLANTA 2"
            percentage="75%"
            date="26 de marzo de 2023"
          />
                    <PlantCard
            image="ruta/a/tu/imagen1"
            title="PLANTA 1"
            percentage="50%"
            date="26 de marzo de 2023"
          />
          <PlantCard
            image="ruta/a/tu/imagen2"
            title="PLANTA 2"
            percentage="75%"
            date="26 de marzo de 2023"
          /> */}

        </div>
      </div>
    );
  }
}

export default PlantDashboard;
