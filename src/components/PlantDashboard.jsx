import PlantCard from "./PlantCard";
import logo2 from '../assets/image/plataLogo.png';
import { useEffect } from "react";
import { useState } from "react";
import socket,{sendIdUserToSystem} from "../utilities/socker-methods";


function PlantDashboard(){

  const [plants, setPlants] = useState([]);
  const [isEmpty, setIsEmtpy]=useState(true)

    useEffect(()=>{
      if(isEmpty){
        sendIdUserToSystem(socket, localStorage.getItem('idUser'));
        console.log('idUser: ', localStorage.getItem('idUser'))
      }
    },[plants]);

    socket.on('systemRes',(data)=>{
      console.log("system: ",data);
      setPlants(data.response.data)
      setIsEmtpy(false);
      console.log(isEmpty);
      if(plants.length==0){
        console.log("no hay datos")
      }       
    });
  
  
    return (
      <div>
        <div className="plant-cards">
          {plants.map((planta,index)=>(
            planta!=null && planta!=undefined?(
              <PlantCard
                key={index}
                id={planta.id}
                image={logo2}
                title={`planta ${planta.id}`}
                percentage={planta.moistureState}
              />
            ): (
              <div>
                <p>No datos</p>
              </div>
            )
            )
            )}
        </div>
      </div>
    ); 


}


export default PlantDashboard;
