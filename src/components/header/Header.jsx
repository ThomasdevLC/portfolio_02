import React from "react";
import "./Header.scss";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav ">
        <div className="header__nav__title"> PORTFOLIO 2023</div>
        <div className="header__nav__menu">
          <Link to="#home">
            <li className="header__nav__menu__item" id="homeNav">
              <span className="number">01. </span>
              home
            </li>
          </Link>
          <Link to="#about" smooth>
            <li className="header__nav__menu__item" id="aboutNav">
              <span className="number">02. </span>
              présentation
            </li>
          </Link>

          <Link to="#works" smooth>
            <li className="header__nav__menu__item" id="worksNav">
              <span className="number">03. </span>
              projets
            </li>
          </Link>

          <Link to="#contact" smooth>
            <li className="header__nav__menu__item" id="contactNav">
              <span className="number">04. </span>
              contact
            </li>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
