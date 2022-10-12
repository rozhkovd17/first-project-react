import React, { useEffect, useState } from "react";
import Image from "./Image";

const Slider = () => {
  const [number, setNumber] = useState(1);
  const [src, setSrc] = useState();

  useEffect(() => {
    setTimeout(() => {
      setSrc(`https://placeimg.com/300/200/tech?id=${number}`);
    }, 3000);
  }, [number]);

  const prev = () => {
    setNumber((number) => number - 1);
  };
  const next = () => {
    setNumber((number) => number + 1);
  };

  return (
    <div>
      <Image src={src} number={number} />
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-between",
        }}
      >
        <button onClick={prev}>Назад</button>
        <button onClick={next}>Вперед</button>
      </div>
    </div>
  );
};
export default Slider;
