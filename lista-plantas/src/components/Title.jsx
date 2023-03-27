import React from "react";
import '../style-sheets/Title.css';
import V2 from '../images/V2.png';

// import React, { useState, useEffect } from 'react';

function Title() {
    // const currentDate = new Date().toLocaleString();

    const currentDate = new Date().toLocaleDateString()

    // const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

    // useEffect(() => {
    //   const timer = setInterval(() => {
    //     setCurrentDate(new Date().toLocaleString());
    //   }, 1000);
    //   return () => clearInterval(timer);
    // }, []);

    return (  
<header>
  <div class="left">
    <img src={V2} alt="SISTEMA DE RIEGO AVANZADO [+]" class="logo"/>
  </div>
  <div class="content">
    <div class="right">
      <div class="color1">
            <h3>{currentDate}</h3>
      </div>
      <div class="color2">
        <div>
          <h3>I2P_URY</h3>
        </div>
        {/* <div>
          hola 3
        </div> */}
      </div>
    </div>
  </div>
</header>

    );
}

export default Title;