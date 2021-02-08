import React, { Component } from "react";
import logo from "../assets/logo/palmeracirculo.png";
import '../css/header.css'

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* EL LOGO */}
          <div id="logo">
            <img
              src={logo}
              className="App-logo"
              alt="Logotipo"
            />
            <span id="brand">
              <strong>Trap</strong>Family
            </span>
          </div>
          {/* MENU NAVEGACION */}
          <nav id="menu">
            <ul>
              <li>
                <a href="#">Trap</a>
              </li>
              <li>
                <a href="#">No Trap</a>
              </li>
              <li>
                <a href="#">La Nueva</a>
              </li>
              <li>
                <a href="#">Top 5</a>
              </li>
            </ul>
          </nav>
           {/* FLOAT */}
           <div className="clearFix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
