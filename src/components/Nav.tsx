import React, { useState } from "react";
import { NavProps } from "../types";
import downArrow from "../assets/images/icon-arrow-down.svg";
import upArrow from "../assets/images/icon-arrow-up.svg";

const Nav: React.FC<NavProps> = ({ navMenu, dropDowns }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <li onClick={() => setShowDropDown(!showDropDown)}>
        <a onClick={() => setShowDropDown(!showDropDown)}>{navMenu}</a>
        {dropDowns.length > 0 && !showDropDown ? (
          <img src={downArrow} alt="down arrow" />
        ) : dropDowns.length > 0 && showDropDown ? (
          <img src={upArrow} alt="up arrow" />
        ) : (
          <></>
        )}
        {dropDowns.length > 0 && showDropDown ? (
          <ul className="inner-ul">
            {dropDowns.map((dropDown, index) => (
              <li key={index}>
                {dropDown.icon && <img src={dropDown.icon} alt="icon" />}
                <a href="#">{dropDown.name}</a>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </li>
    </>
  );
};

export default Nav;
