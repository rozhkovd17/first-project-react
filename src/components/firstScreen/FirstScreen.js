import React from "react";
import FirstScreenContent from "../firstScreenContent/FirstScreenContent";
import FirstScreenHeader from "../firstScreenHeader/FirsrScreenHeader";
import "./firstScreen.scss";

const FirstScreen = () => {
  return (
    <section className="fs">
      <div className="container">
        <FirstScreenHeader />
        <FirstScreenContent />
      </div>
    </section>
  );
};
export default FirstScreen;
