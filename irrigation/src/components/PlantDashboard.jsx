import PlantCard from "./PlantCard";
import PlantAside from "./PlantAside";
import logo2 from '../assets/image/plataLogo.png';
import Title from "./Title";

function PlantDashboard(){


  const handleSystemAsk=(e)=>{
    const id_user=1;
    socket.emit('systemAsk', id_user);
    console.log("hecho la peticion de sistema")
  }


const plantas =[
  {
    image:logo2,
    title:"PLANTA",
    percentage:"50%",
    date:"26 de marzo de 2023"
  },{
    image:logo2,
    title:"PLANTA",
    percentage:"40%",
    date:"27 de marzo de 2023"
  }
];




return (
    <div>
      <Title></Title>
      <PlantAside/>
      <div className="plant-cards">
        {plantas.map((planta,index)=>(
            <PlantCard
              key={index}
              image={planta.image}
              title={planta.title}
              percentage={planta.percentage}
              date={planta.date}
            />
          )
          )}
      </div>
    </div>
  );
}


export default PlantDashboard;
