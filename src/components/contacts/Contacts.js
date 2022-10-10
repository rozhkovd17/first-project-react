import React from "react";
import "./contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__wrap">
          <div className="contact__nav">
            <span className="contact__nav_item">Home</span>
            <span className="contact__nav_item">About me</span>
            <span className="contact__nav_item">Portfolio</span>
            <span className="contact__nav_item">Contact</span>
          </div>
          <div className="contact">
            <span className="contact__item">Contact:</span>
            <span className="contact__item">Email: notitanic33@gmail.com</span>
            <span className="contact__item">Inst: notitanic33</span>
            <span className="contact__item">
              Calls: +7 (900) - 121 - 54 -54{" "}
            </span>
          </div>
          <div className="contact__copyright_wrap">
            <div className="contact__copyright">
              <div className="contact__copyright_logo">
                <img src="images/header-logo.png" />
              </div>
              <button className="contact__copyright_button">
                <img src="images/buttons.png" />
              </button>
            </div>
            <span className="contact__copyright_descr">
              Copyright © 2021, Notitanic
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
