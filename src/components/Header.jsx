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
              alt="Logotipo"
              width="40"
              height="40"
            />
            <span id="brand">
              <strong>Trap</strong>Family
            </span>
          </div>
          <ul className="navlinks">
              <li className="link">
                <a href="#">Trap</a>
              </li>
              <li className="link">
                <a href="#">No Trap</a>
              </li>
              <li className="link">
                <a href="#">La Nueva</a>
              </li>
              <li className="link">
                <a href="#">Top 5</a>
              </li>
            </ul>
          </nav>
    );
}

export default Header;
