import React, { Component } from "react";
import logo from "../assets/logo/palmeracirculo.png";
import '../css/header.css'

const Header = () => {
    return (
        <nav>
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
    );
}

export default Header;
