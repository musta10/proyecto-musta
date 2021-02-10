import React, { Component } from "react";
import logo from "../assets/logo/palmeracirculo.png";
import '../css/header.css'

class Nav extends Component {
    render() {
        return(
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
        <div>
          <p>Musica <strong>Trap</strong>  y Drill</p>
        </div>
            </nav>
        )
    }
}

export default Nav;