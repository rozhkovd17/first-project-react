import React, { useState, useEffect } from "react";
import FirstScreen from "./components/firstScreen/FirstScreen";
import AboutMe from "./components/aboutMe/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";
import Huks from "./components/huks/Huks";

function App() {
  const [isDelete, setIsDelete] = useState(false);

  return (
    <>
      <FirstScreen />
      <AboutMe />
      <Portfolio title="Portfolio" />
      <Contacts />
      {isDelete && <h1>Компонент Удален</h1>}
      {!isDelete && <Huks />}
      <button
        onClick={() => {
          setIsDelete(true);
        }}
      >
        Удалить компонент
      </button>
    </>
  );
}

export default App;
