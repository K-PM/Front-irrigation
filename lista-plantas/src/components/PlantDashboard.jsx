import React from "react";
import PlantCard from "./PlantCard";
import PlantAside from "./PlantAside";
import logo2 from '../images/plataLogo.png';
import Title from "./Title";

function PlantDashboard(){

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
