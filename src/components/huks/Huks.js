import React, { useState } from "react";
import Form from "./Form";
import HukComponent from "./HukComponent";
import Slider from "./Slider";
import Context from "./Context";
import ClassComponent from "./ClassComponent";

const Huks = () => {
  const appName = "Мое приложение";
  const [isRender, setIsRender] = useState(true);

  setTimeout(() => {
    setIsRender(false);
  }, 5000);

  return (
    <Context.Provider value={appName}>
      {isRender && <HukComponent />}
      <h1>Остался</h1>
      <Slider />
      <Form context={appName} />
      <ClassComponent title="Заголовок" />
    </Context.Provider>
  );
};
export default Huks;
