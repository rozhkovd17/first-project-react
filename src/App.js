import React from "react";
import FirstScreen from "./components/firstScreen/FirstScreen";
import AboutMe from "./components/aboutMe/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <>
      <FirstScreen />
      <AboutMe />
      <Portfolio title="Portfolio" />
      <Contacts />
    </>
  );
}

export default App;
