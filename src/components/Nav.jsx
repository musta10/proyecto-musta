import React, { Component } from "react";
import logo from "../assets/logo/palmeracirculo.png";
// import Lista from "./Lista";
import "../css/header.css";
import styled from "styled-components";

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          {/* EL LOGO */}
          <div id="logo">
            <img src={logo} alt="Logotipo" width="40" height="40" />
            <span id="brand">
              <strong>Trap</strong>Family
            </span>
          </div>
          <div className="titulo">
            <p>
              Musica <strong>Trap</strong> y Drill
            </p>
          </div>
        </nav>
        {/* <Lista /> */}
      </>
    );
  }
}

export default Nav;
