import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
import User from "../components/User";
import Calendrier from "../components/Calendrier"
import Covid from "../components/Covid";
import Films from "../components/Films";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}>
      </div>
      
      <div className="aboutBottom">
      <User />
      <Calendrier />
      <Covid />
      <Films />
      </div>
    </div>
  );
}

export default About;
