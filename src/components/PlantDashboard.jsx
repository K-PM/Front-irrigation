import PlantCard from "./PlantCard";
import logo2 from '../assets/image/plataLogo.png';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function PlantDashboard(){


  const [plants, setPlants] = useState([]);
    useEffect(()=>{
      console.log('a');
  },[plants]);
  
  setPlants([
    {
      id:1,
      moistureState: 80,
      date: "domingo 20 de marzo de 2023"
    },
    {
      id:2,
      moistureState: 83,
      date: "lunes 21 de marzo de 2023"
    },
  ])
  const navigate = useNavigate();

  const handleClick=(e)=>{
      const idSystem=e.target.id;
      navigate(`/irrigation/${idSystem}`);
  }

  if(plants){
    return (
      <div>
  
        <div className="plant-cards">
          {plants.map((planta,index)=>(
              <PlantCard
                key={index}
                id={planta.id}
                image={logo2}
                title={`planta ${planta.id}`}
                percentage={planta.moistureState}
                date={planta.date}
                handleClick={handleClick}
              />
            )
            )}
        </div>
      </div>
    ); 
  }else{
    return(
      <>
        <div>
          <p>No datos</p>
        </div>
      </>
    )
  }

}


export default PlantDashboard;
