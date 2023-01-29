import React from "react";
import { NavLink } from "react-router-dom";
import site from "../../assets/images/site.jpg";
import site2 from "../../assets/images/site2.jpg";
import site3 from "../../assets/images/site3.jpg";
import site4 from "../../assets/images/site4.jpg";
import site5 from "../../assets/images/site5.jpg";
import site6 from "../../assets/images/site6.jpg";
import groupomania from "../../assets/images/groupomania/groupomania-two.jpg";

import "./Works.scss";

const Works = ({ imageEnter, imageLeave }) => {
  return (
    <div className="works" id="works">
      <div class="works__container">
        <div className="block">
          <h1 className="maintitle">
            03. projets <br />
            2022-2023{" "}
          </h1>
        </div>
        <NavLink to="/groupomania" className="link">
          <div
            className="over card"
            onMouseEnter={imageEnter}
            onMouseLeave={imageLeave}
          >
            <img className="card__picture" src={site} />
            <div className="card__text">
              <h2 className="card__text__title">BOOKI</h2>
              <p className="card__text__description">
                formation openclassrooms <br />
                2022
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/groupomania" className="link">
          <div className="over card">
            <img className="card__picture" src={site2} />
            <div className="card__text">
              <h2 className="card__text__title">KANAP</h2>
              <p className="card__text__description">
                formation openclassrooms <br />
                2022
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/groupomania" className="link">
          <div className="over card">
            <img className="card__picture" src={site3} />
            <div className="card__text">
              <h2 className="card__text__title">OH MYFOOD</h2>
              <p className="card__text__description">
                formation openclassrooms <br />
                2022
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/groupomania" className="link">
          <div className="over card">
            <img className="card__picture" src={groupomania} />
            <div className="card__text">
              <h2 className="card__text__title">GROUPOMANIA</h2>
              <p className="card__text__description">
                formation openclassrooms <br />
                2022
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/groupomania" className="link">
          <div className="over card">
            <img className="card__picture" src={site5} />
            <div className="card__text">
              <h2 className="card__text__title">KASA</h2>
              <p className="card__text__description">
                formation openclassrooms <br />
                2022
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/groupomania" className="link">
          <div className="over card">
            <img className="card__picture" src={site6} />
            <div className="card__text">
              <h2 className="card__text__title">PROJET PERSO</h2>
              <p className="card__text__description">
                formation openclassrooms <br />
                2022
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/groupomania" className="link">
          <div className="over card">
            <img className="card__picture" src={site2} />
            <div className="card__text">
              <h2 className="card__text__title">FERME DE LA ROUGERAIE</h2>
              <p className="card__text__description">
                formation openclassrooms <br />
                2022
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Works;
