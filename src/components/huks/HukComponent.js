import React, { useState, useEffect } from "react";

const HukComponent = () => {
  const [state, setState] = useState(true);
  const [button, setButton] = useState(true);
  let isFirstRender = true;

  useEffect(() => {
    console.log("компонент отрисовался");
    return () => {
      if (isFirstRender) {
        isFirstRender = false;
      } else {
        alert("Компонент удален");
      }
    };
  }, []);

  const clickButton = (event) => {
    setState((state) => !state);
    setButton((button) => !button);
  };

  return (
    <>
      <h1>{state ? "Привет React" : "Пока React"}</h1>
      <button onClick={clickButton}>{button ? "Привет" : "Пока"}</button>
    </>
  );
};
export default HukComponent;
