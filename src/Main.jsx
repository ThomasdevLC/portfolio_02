import React from "react";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Works from "./pages/works/Works";
const Main = ({ imageEnter, imageLeave }) => {
  return (
    <div className="main">
      <Home />
      <About />
      <Works imageEnter={imageEnter} imageLeave={imageLeave} />
      <Contact />
    </div>
  );
};

export default Main;
