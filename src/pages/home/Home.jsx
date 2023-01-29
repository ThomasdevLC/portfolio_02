import React from "react";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";

import site2 from "../../assets/images/site2.jpg";
import site3 from "../../assets/images/site3.jpg";
import site4 from "../../assets/images/site4.jpg";
import site5 from "../../assets/images/site5.jpg";

import "./Home.scss";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.5,
    },
  },
};

const variants = {
  hidden: {
    opacity: 0,
    y: "50vh",
  },

  visible: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring",
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
      stiffness: 30,
    },
  },
};

const picVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },

  visible: {
    opacity: 1,
    y: "0",
    transition: {
      type: "spring",
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
      stiffness: 30,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home"
      id="home"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <div className="home__container br">
        <motion.div
          className="home__container__description"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="home__container__description__name">
            THOMAS <br /> LE CAM
          </h1>
          <div className="home__container__description__bottom">
            <h2 className="home__container__description__bottom__position">
              DEVELOPEUR FRONTEND
            </h2>
            <p className="home__container__description__bottom__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              facilis illum fugit provident assumenda ad itaque nostrum veniam
              quae totam ipsum numquam, odio dolor consectetur quod eligendi
              corporis voluptates aliquam eaque praesentium earum. Doloremque
              consectetur architecto labore. Laudantium optio, inventore magnam
              iste at nulla veritatis minima aut ipsum, esse autem? Repellat
              quae ea dicta perferendis ipsam. Nulla illum enim consequuntur
              aliquid, dolorum dolore aperiam quae.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="home__container__pics br "
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="home__container__pics__top ">
            <motion.div
              className="home__container__pics__top__card"
              variants={picVariants}
            >
              <img
                className="home__container__pics__top__card__picture"
                src={site2}
              />
            </motion.div>
            <motion.div
              className="home__container__pics__top__card"
              variants={picVariants}
            >
              <img
                className="home__container__pics__top__card__picture"
                src={site4}
              />
            </motion.div>
          </div>
          <div className="home__container__pics__bottom ">
            <motion.div
              className="home__container__pics__bottom__card"
              variants={picVariants}
            >
              <img
                className="home__container__pics__bottom__card__picture"
                src={site3}
              />
            </motion.div>
            <motion.div
              className="home__container__pics__bottom__card"
              variants={picVariants}
            >
              <img
                className="home__container__pics__bottom__card__picture"
                src={site5}
              />
            </motion.div>
            <motion.div
              className="home__container__pics__bottom__card"
              variants={picVariants}
            >
              <img
                className="home__container__pics__bottom__card__picture"
                src={site3}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
