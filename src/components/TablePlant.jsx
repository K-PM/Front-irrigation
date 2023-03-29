import PlantInfo from "./PlantInfo";
import '../assets/css/table.css'
import logo2 from '../assets/image/plataLogo.png';
import ima2 from "../assets/image/soltar.png";
import ima3 from "../assets/image/Azul.png";
import { useEffect } from "react";
import { useState } from "react";


function TablePlant() {

    const idSystem=1;

    const [listIrrigation, setListIrrigation] = useState([]);

    useEffect(()=>{
        setListIrrigation([
            {
                id:1,
                moistureState: 80,
                previousMoistureState: 20,
                date: 'domingo 20 de marzo de 2023' //va aparecer de otra manera
            },
            {
                id:2,
                moistureState: 83,
                previousMoistureState: 18,
                date: 'lunes 21 de marzo de 2023' //va aparecer de otra manera
            }
        ])
    },[])

   

    return (  
        <>
        <div>
            <PlantInfo
                imageSrc={logo2}
                ima2 ={ima2}
                ima3={ima3}
            />
        </div>

        <div  className="div-principal">
        <table >
            <thead>
            <tr className="hola">
                <th className="humA">Humedad después del riego</th>
                <th className="humD">Humedad antes del riego</th>
                <th className="Fech">Fecha</th>
            </tr>
            </thead>
            <tbody>
            {listIrrigation.map((irrigation) => (
                <tr key={irrigation.id}>
                    <td>{irrigation.moistureState}</td>
                    <td>{irrigation.previousMoistureState}</td>
                    <td>{irrigation.date}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        <button className="btn-generate-pdf " onClick={() => window.print()}>Generar PDF</button>
       
        </>
    );
}

export default TablePlant;