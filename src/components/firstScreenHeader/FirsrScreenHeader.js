import React from "react";
import Nav from "../nav/Nav";
import "./firstScreenHeader.scss";

const FirstScreenHeader = () => {
  return (
    <header className="header">
      <img src="images/header-logo.png" className="header__logo" />
      <Nav />
    </header>
  );
};
export default FirstScreenHeader;
