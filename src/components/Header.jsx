import React, { useState} from "react";
import logo from "../assets/logo/palmeracirculo.png";
import '../css/header.css'

const Header = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);
  // const state = useState(false)
  // const navLinkOpen = state[0]
  // const navLinkToggle = state[1]
  const handlenavLinksToggle = () =>{
    navLinkToggle(!navLinkOpen)
  }
  const renderClass = () => {
    let classes = "navlinks";
    if (navLinkOpen) {
      classes += " active"
    }
     return classes
  }
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
          <ul className={renderClass()}>
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
            <div onClick={handlenavLinksToggle} className="hamburger-menu">
            <img src="https://img.icons8.com/android/24/000000/menu.png"/>
            </div>
          </nav>
    );
}

export default Header;
