import React from "react";
import line from "../assest/Line.png";
import logo from "../assest/Logo3.svg";
import flor from "../assest/florprincipal.jpeg";
import { info } from "autoprefixer";
import collegue from "../assest/collegue2.png"
import "../components/Home.css";


const Home = () => {
  return (
    <div className="padre">
    
         <img src={line} className={info} alt="info " />
        <h1 className={info}> FLORES DEL TAMBO</h1>
        <img src={line} className={info} alt="line " />
        <div className="florcontainer">
          <img src={flor} className="principal" alt="Information " />
        </div>
        <div className="information">
          <h1 className="letter1">
            Flores del Tambo es una distribuidora que siembra sus flores hasta la
            recolección de las mismas para finalmente expórtalas.
          </h1>
          <img src={collegue} className="colleguephotos" alt="flower " />
        </div>
  
    </div>   
  );
};

export default Home;
