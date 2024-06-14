import { useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";

import "../styles/navbar.css";
import { dropDownList } from "../constants";
import Nav from "./Nav";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img src={logo} alt="snap logo" />
        <div className="full-nav-container">
          <ul>
            {dropDownList.map((item, index) => (
              <Nav {...item} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div className="button-containers">
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>

      <div className="nav-menu-container">
        <a onClick={() => setIsOpen(!isOpen)}>
          <img src={menu} alt="menu icon" />
        </a>
      </div>
      {isOpen && (
        <>
          <div className="hidden-nav-overlay"></div>
          <div className="hidden-nav">
            <div className="nav-close-container">
              <a href="#" onClick={() => setIsOpen(!isOpen)}>
                <img src={closeIcon} alt="close icon" />
              </a>
            </div>
            <ul className="outer-ul">
              {dropDownList.map((item, index) => (
                <Nav {...item} key={index} />
              ))}
            </ul>
            <div className="hidden-button-containers">
              <a href="#">Login</a>
              <a href="#">Register</a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
