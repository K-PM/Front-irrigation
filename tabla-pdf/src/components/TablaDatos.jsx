import React from "react";
import '../style-sheets/TablaDatos.css';
import jsPDF from 'jspdf';

function TablaDatos({ datos }) {
    // const generatePDF = () => {
    //     const doc = new jsPDF({
    //       orientation: "landscape", // orientación horizontal
    //       unit: "pt", // unidades en puntos
    //       format: [window.innerWidth, window.innerHeight], // tamaño del documento
    //     });
      
    //     // Agrega el HTML de la página al documento PDF
    //     doc.addHTML(document.body, () => {
    //       doc.save("archivo.pdf");
    //     });
    //   }

    return (
        <div className="div-principal">
        <table>
            <thead>
            <tr>
                <th>Humedad después del riego</th>
                <th>Humedad antes del riego</th>
                <th>Fecha</th>
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
        <button className="btn-generate-pdf " onClick={() => window.print()}>Generar PDF</button>
        </div>
    );
}

export default TablaDatos;
