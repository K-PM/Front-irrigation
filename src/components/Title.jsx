import React from "react";
import '../style-sheets/Title.css';

function Title() {
    return (  
<header>
  <div class="left">
    <img src="ruta/a/tu/logo" alt="logo de tu sitio web" class="logo"/>
  </div>
  <div class="content">
    <div class="right">
      <div class="color1">
            hola
      </div>
      <div class="color2">
        <div>
          hola 2
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