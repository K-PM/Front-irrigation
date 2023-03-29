import React, {useState} from "react";
import PlantInfo from "./PlantInfo";
import '../style-sheets/PlantDashboard.css'
import logo2 from '../images/logos2.png';
import agualogo from '../images/agualogo.png';
import TablaDatos from "./TablaDatos";

function PlantDashboard() {

    const datos = [
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" },
        { id: 1, humedadDespuesRiego: "50%", humedadAntesRiego: "20%", fecha: "10 de marzo" }   
        
    ];
    

    const [datosTabla, setDatosTabla] = useState(['1']);

  // Función para actualizar los datos
    const actualizarDatos = (nuevosDatos) => {
        setDatosTabla(nuevosDatos);
    };

    return (  
        <>
        <div className="dashboard-inicial">
            <PlantInfo
                imageSrc={logo2}
                humidityCurrent ='50'
                humidityPrevious='20'
            />
        </div>
        <div>
            <TablaDatos
                datos = {datos}
            />
        </div>
        </>
    );
}

export default PlantDashboard;