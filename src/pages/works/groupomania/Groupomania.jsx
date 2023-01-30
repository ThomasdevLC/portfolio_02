import React from "react";
import logo from "../../../assets/images/groupomania/groupomania-logo.jpg";
import video from "../../../assets/videos/groupomania-video.mp4";
import react from "../../../assets/images/technos/react.png";
import Header from "../../../components/header/Header";

import "./Groupomania.scss";

const Groupomania = () => {
  return (
    <>
      <div className="container">
        <Header />
        <img
          className="container__logo"
          src={logo}
          alt="video site groupomania"
        />
        <video
          className="container__video"
          width="100%"
          src={video}
          type="video/mp4"
          loop
          autoPlay
        ></video>
        <div className="project">
          <p className="project__pitch">
            Dans le cadre d'un des projet Openclassrooms, il était demandé
            d'intégrer le design d'une maquette figma avec la technologie
            React.js. Ce projet fut ma première application React.js avec
            l'utilisation de react-router et typescript.
          </p>
          <div className="project__mission">
            <h2 className="project__mission__title">Mission</h2>
            <p className="project__mission__text">
              Le site de Kasa a été codé il y a maintenant plus de 10 ans en
              ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé
              une refonte totale pour passer à une stack complète en JavaScript
              avec NodeJS côté Back-end, et React côté Front-end. Kasa en a
              également profité pour commander de nouvelles maquettes auprès de
              son designer habituel, qui est en freelance
            </p>
            <div className="project__mission__technos">
              <ul className="project__mission__technos__list">
                <li>
                  <img
                    className="project__mission__technos__logo"
                    src={react}
                    alt="logo react"
                  />
                </li>
                <li>
                  <img
                    className="project__mission__technos__logo"
                    src={react}
                    alt="logo react"
                  />
                </li>
                <li>
                  <img
                    className="project__mission__technos__logo"
                    src={react}
                    alt="logo react"
                  />
                </li>
                <li>
                  <img
                    className="project__mission__technos__logo"
                    src={react}
                    alt="logo react"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groupomania;
