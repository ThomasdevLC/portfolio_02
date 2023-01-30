import React from "react";
import site2 from "../../assets/images/site2.jpg";
import site3 from "../../assets/images/site3.jpg";
import site4 from "../../assets/images/site4.jpg";
import site5 from "../../assets/images/site5.jpg";
import site6 from "../../assets/images/site6.jpg";
import Header from "../../components/header/Header";
import "./HomeTest.scss";

const HomeTest = () => {
  return (
    <div className="HomeTest">
      <Header />

      <div class="HomeTest__grid br">
        <div class="HomeTest__grid__text text-grid">
          <h1 className="HomeTest__grid__text__name">THOMAS LE CAM</h1>

          <h2 className="HomeTest__grid__text__position">
            DEVELOPEUR FRONTEND
          </h2>
          <p className="HomeTest__grid__text__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            facilis illum fugit provident assumenda ad itaque nostrum veniam
            quae totam ipsum numquam, odio dolor consectetur quod eligendi
            corporis voluptates aliquam eaque praesentium earum. Doloremque
            consectetur architecto labore. Laudantium optio, inventore magnam
            iste at nulla veritatis minima aut ipsum, esse autem? Repellat quae
            ea dicta perferendis ipsam. Nulla illum enim consequuntur aliquid,
            dolorum dolore aperiam quae.
          </p>
        </div>
        <div class="HomeTest__grid__card  image-one">
          <img src={site2} alt="" className="HomeTest__grid__card__img " />
        </div>
        <div class="HomeTest__grid__card image-two">
          <img src={site3} alt="" className="HomeTest__grid__card__img " />
        </div>
        <div class="HomeTest__grid__card image-three">
          <img src={site4} alt="" className="HomeTest__grid__card__img " />
        </div>
        <div class="HomeTest__grid__card image-four">
          <img src={site5} alt="" className="HomeTest__grid__card__img " />
        </div>
      </div>
    </div>
  );
};

export default HomeTest;
