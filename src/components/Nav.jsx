import React, { Component } from "react";
import logo from "../assets/logo/palmeracirculo.png";
import Lista from "./Lista";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../css/header.css";
import Topmusic from '../components/Topmusic'
import Trap from '../components/Trap'
import Lanueva from '../components/Lanueva'
// import styled from "styled-components";

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="nav-bar">
          {/* EL LOGO */}
          <div id="logo">
            <img src={logo} alt="Logotipo" width="40" height="40" />
            <span id="brand">
              <strong>Trap</strong>Family
            </span>
          </div>
          <div className="texto-titulo">
            <p>
              Musica <strong>Trap</strong> y Drill
            </p>
          </div>
        </nav>
        {/* <Lista /> */}
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="trap" title="Trap">
          <Trap />
        </Tab>
        <Tab eventKey="notrap" title="Reggaeton">
         <Lista />
        </Tab>
        <Tab eventKey="lanueva" title="La Nueva">
          <Lanueva />
        </Tab>
        <Tab eventKey="Top 5" title="Top 5">
          <Topmusic />
        </Tab>
      </Tabs>
      </>
    );
  }
}

export default Nav;
