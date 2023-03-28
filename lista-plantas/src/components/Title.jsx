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
    <img src={V2} class="Principal"/>
    <div className="tito">
        <h3>{currentDate}</h3>
        <h3>I2P_URY</h3>
    </div>
</header>

    );
}

export default Title;