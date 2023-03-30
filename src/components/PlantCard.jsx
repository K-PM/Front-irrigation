import { useNavigate } from 'react-router-dom';
import '../assets/css/plantCard.css'


function PlantCard ({image, title, percentage, id}){

    const navigate = useNavigate();
    
    const handleClick=(e)=>{
    const idSystem=e.target.id;
    navigate(`/irrigation/${idSystem}`);
}


    
return (
    <div className="plant-card" id={id} onClick={handleClick}>
        <img id={id} src={image}  className='logo-planta'/>
        <h2> id={id} {title}</h2>
        <h2 id={id}>{percentage}</h2>
    </div>
    );

}

export default PlantCard;