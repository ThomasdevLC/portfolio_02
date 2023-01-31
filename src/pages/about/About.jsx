import React from "react";
import photo from "../../assets/images/photo.jpg";
import "./About.scss";

const About = () => {
  return (
    <div className="about br" id="about">
      <div className="about__introduce ">
        <h1 className="about__introduce__title">
          <span className="about__introduce__title__number">02.</span>
          présentation
        </h1>
        <h2 className="about__introduce__intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Repellendus error quisquam reprehenderit!
        </h2>
        <p className="about__introduce__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          facilis illum fugit provident assumenda ad itaque nostrum veniam quae
          totam ipsum numquam, odio dolor consectetur quod eligendi corporis
          voluptates aliquam eaque praesentium earum. Doloremque consectetur
          architecto labore. Laudantium optio, inventore magnam iste at nulla
          veritatis minima aut ipsum, esse autem? Repellat quae ea dicta
          perferendis ipsam. Nulla illum enim consequuntur aliquid, dolorum
          dolore aperiam quae. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Delectus facilis illum fugit provident assumenda ad
          itaque nostrum veniam quae totam ipsum numquam, odio dolor consectetur
          quod eligendi corporis voluptates aliquam eaque praesentium earum.
          Doloremque consectetur architecto labore. Laudantium optio, inventore
          magnam iste at nulla veritatis minima aut ipsum, esse autem? Repellat
          quae ea dicta perferendis ipsam. Nulla illum enim consequuntur
          aliquid, dolorum dolore aperiam quae.
        </p>
      </div>
      {/* <div className="about__picture">
        <img src={photo} alt="photo" />
      </div> */}
    </div>
  );
};

export default About;
