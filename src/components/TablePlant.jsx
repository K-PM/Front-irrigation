import PlantInfo from "./PlantInfo";
import '../assets/css/table.css'
import logo2 from '../assets/image/plataLogo.png';
import ima2 from "../assets/image/soltar.png";
import ima3 from "../assets/image/Azul.png";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { UseUser } from "../context/UserProvider";
import socket,{sendIdSystemtoIrrigation}from "../utilities/socker-methods";
UseUser



function TablePlant() {

    const objectid=useParams();


    const [listIrrigation, setListIrrigation] = useState([]);
    const [isEmpty, setIsEmtpy]=useState(true)

    useEffect(()=>{
        console.log(isEmpty)
        if(isEmpty){
            sendIdSystemtoIrrigation(socket, objectid.id);
            console.log('idSystem: ', objectid.id)
        }

    },[])
    
    socket.on('irrigationRes',(data)=>{
        console.log("irrigation: ",data);
        if(isEmpty){
            setListIrrigation(data.response.data)
            setIsEmtpy(false);
        }
        if(listIrrigation.length==0){
            console.log("no hay datos")
          }       
        console.log(isEmpty);
      });



   

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
                irrigation!=null&&irrigation!=undefined?(
                    <tr key={irrigation.id}>
                    <td>{irrigation.moistureState}</td>
                    <td>{irrigation.previousMoistureState}</td>
                    <td>{irrigation.date}</td>
                </tr>
                ):(
                    <div>
                        <p>No datos</p>
                    </div>
                )
            ))}
            </tbody>
        </table>
        </div>
        <button className="btn-generate-pdf " onClick={() => window.print()}>Generar PDF</button>
       
        </>
    );
}

export default TablePlant;