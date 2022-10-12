import React, { useMemo } from "react";

const Image = (props) => {
  const number = useMemo(() => {
    return props.number;
  }, [props.src]);

  return (
    <>
      <h1>номер картинки: {number}</h1>
      <img src={props.src} />
    </>
  );
};
export default Image;
