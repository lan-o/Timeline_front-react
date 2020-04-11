import React from "react";

import logo from "./logo.png";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo"></img>
    </header>
  );
};

export default Header;
