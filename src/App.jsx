import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Main from "./Main";
import Groupomania from "./pages/works/groupomania/Groupomania";
import "./App.scss";

const App = () => {
  const [mousePositon, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      opacity: 1,
      x: mousePositon.x,
      y: mousePositon.y,
    },

    image: {
      opacity: 1,
      x: mousePositon.x - 1,
      y: mousePositon.y - 1,
      height: 60,
      width: 60,
      backgroundColor: "white",
      transition: {
        type: "spring",
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  const imageEnter = () => setCursorVariant("image");
  const imageLeave = () => setCursorVariant("default");

  return (
    <div className="app-container">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>

      <Routes>
        <Route path="/groupomania" element={<Groupomania />} />
        <Route
          path="/"
          element={<Main imageEnter={imageEnter} imageLeave={imageLeave} />}
        />
      </Routes>
    </div>
  );
};

export default App;
