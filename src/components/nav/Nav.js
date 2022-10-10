import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="header__menu">
      <Link to="/">Home</Link>
      <Link to="/about">About me</Link>
      <Link to="/aboutme">Portfolio</Link>
      <Link to="/contacts">Contact</Link>
    </nav>
  );
};
export default Nav;
