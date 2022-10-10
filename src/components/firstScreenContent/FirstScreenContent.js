import React from "react";
import "./firstScreenContent.scss";

const FirstScreenContent = () => {
  return (
    <div className="fs__content">
      <div className="fs__content_title">
        <span>Hello</span>
        <div className="fs__content_title-1">I’m Gleb Kostrubov</div>
        <div className="fs__content_title-description">
          I've been doing web design, front-end and back-end development for a
          year now. Do you need a website design, site layout, or maybe a
          turnkey website? Then contact me
        </div>
        <button className="fs__content_button">CONTACT ME</button>
      </div>
      <div className="fs__content_img">
        <img className="fs__content_img-1" src="images/iam.png" />
      </div>
    </div>
  );
};
export default FirstScreenContent;
