import React from "react";
import AboutMeDescription from "../aboutMeDescription/AboutMeDescription";
import AboutMeSkills from "../skills/AboutMeSkills";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <section
      className="about"
      style={{
        background: "linear-gradient(130.68deg, #414141 0%, #2D2D2D 100.52%)",
      }}
    >
      <div className="container">
        <AboutMeSkills />
        <AboutMeDescription />
      </div>
    </section>
  );
};
export default AboutMe;
