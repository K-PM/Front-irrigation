import '../assets/css/plantaInfo.css'


const PlantInfo = ({imageSrc, ima2, ima3}) => {
  const date = new Date();

  return (
    <div className="plant-info-container">
      <div className="plant-column">
        <img src={imageSrc} className="logo-planta3"/>
        <h2 >Planta</h2>
      </div>
      
      <div className="plant-column">
        <div>
        <img src={ima2} className="logo-planta2"/>
          <h2 >Su Humedad Adecuada Es  50% - 60%</h2>
          
        </div>
        
      </div>
      <div className="nom plant-column">
        <img src={ima3}  className="logo-planta1"/>
        <h2 >{date.toLocaleDateString()}</h2>
      </div>
    </div>
  );
}

export default PlantInfo;