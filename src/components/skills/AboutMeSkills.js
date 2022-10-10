import React from "react";
import "./aboutMeSkills.scss";

const AboutMeSkills = () => {
  const images = [
    { img: "images/skills-1.png", title: "Product Design" },
    { img: "images/skills-2.png", title: "UX/UI Design" },
    { img: "images/skills-3.png", title: "Icon Design" },
    { img: "images/skills-4.png", title: "Logo Design" },
    { img: "images/skills-5.png", title: "Backend" },
    { img: "images/skills-6.png", title: "Frontend" },
    { img: "images/skills-7.png", title: "Motion" },
  ];

  return (
    <div className="about__skills_wrap">
      {images.map((imgDescr) => {
        return (
          <div className="about__skills_item">
            <div className="about__skills_item_img">
              <img src={imgDescr.img} />
            </div>
            <div className="about__skills_item_title">{imgDescr.title}</div>
          </div>
        );
      })}
    </div>
  );
};
export default AboutMeSkills;
