import React from "react";
import logo from "../logo.svg";

export const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Mis Canciones</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
