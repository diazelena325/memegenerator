import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <header>
        <div className="header-logo">
        <img src={logo} alt="" className="header-logo-img" />
      <h2>Meme Generator</h2>
        </div>
      <h4>React Course - Project 3</h4>
    </header>
  );
}

export default Header;
