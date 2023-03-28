import PlantInfo from "./PlantInfo";
import '../assets/css/table.css'
import logo2 from '../assets/image/plataLogo.png';
import Title from "../components/Title";
import ima2 from "../assets/image/soltar.png";
import ima3 from "../assets/image/Azul.png";


function Table() {

    const handleIrrigationAsk=(e)=>{
        const id_system=1;
        socket.emit('irrigationAsk', id_system);
        console.log("hecho la peticion de riego")
    }



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
    
    return (  
        <>
        <Title></Title>
        <div className="">
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
            {datos.map((dato) => (
                <tr key={dato.id}>
                <td>{dato.humedadDespuesRiego}</td>
                <td>{dato.humedadAntesRiego}</td>
                <td>{dato.fecha}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        <button className="btn-generate-pdf " onClick={() => window.print()}>Generar PDF</button>
       
        </>
    );
}

export default Table;