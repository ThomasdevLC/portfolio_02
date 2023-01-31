import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4qpt1y4",
        "template_rrla32d",
        form.current,
        "vg5zAtqNfdeg48xJD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <section className="contact">
      <div className="contact__top">
        <p className="contact__top__name">
          THOMAS LE CAM - Développeur frontend
        </p>
        <p className="contact__top__job">Développeur frontend</p>
        <ul className="contact__top__details">
          <li>Montpellier</li>
          <li>06 43 84 36 32</li>
          <li> Email :thomas.lecam@gmail.com</li>
          <li> Linkedin / Github / CV </li>
        </ul>
      </div>
      <div className="contact__bottom">
        <form ref={form} onSubmit={sendEmail} className="contact__bottom__form">
          <h1 className="contact__bottom__form__title"> * 03.contact</h1>
          <input
            type="text"
            className="contact__bottom__form__input"
            placeholder="NOM"
            name="name"
          />
          <input
            type="text"
            className="contact__bottom__form__input"
            placeholder="EMAIL"
            name="email"
          />
          <textarea
            type="text"
            className="contact__bottom__form__message"
            placeholder="MESSAGE"
            name="message"
          />
          <button className="contact__bottom__form__btn">ENVOYER</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
