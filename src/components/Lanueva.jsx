import React, { Component } from "react";
import '../css/lanueva.css'

class Lanueva extends Component {
  render() {
    return (
      <>
           <p className="texto-titulo">artistas La nueva generación</p>
        <ul className="lista-lanueva">
          <li>
            <a href="">Daddy Yankee</a>
          </li>
          <li>
            <a href="">Don Omar</a>
          </li>
          <li>
            <a href="">Tego Calderon</a>
          </li>
          <li>
            <a href="">Zion y Lennox</a>
          </li>
          <li>
            <a href="">Wisin y Yandel</a>
          </li>
          <li>
            <a href="">Ozuna</a>
          </li>
          <li>
            <a href="">Ñejo</a>
          </li>
          
        </ul>
      </>
    );
  }
}

export default Lanueva;
