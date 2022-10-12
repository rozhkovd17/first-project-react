import React, { useRef, useState, useContext } from "react";
import Context from "./Context";

const Form = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  const [value, setValue] = useState();

  const change = (event) => {
    const input = event.target;
    setValue(input.value);
  };

  return (
    <>
      <p>
        <input onChange={change} ref={inputRef} value={value} />
      </p>
      <h1>{value}</h1>
      <h1>{context}</h1>
    </>
  );
};
export default Form;
