import React from "react";
import "./formContact.scss";
import WowWrapper from "../wowWrapper/WowWrapper.component";

const FormContect = () => {
  return (
    <WowWrapper>
      <div className="form_box">
        <div className="head">
          <h1 className="title  wow animate__animated animate__fadeInUp">
            Let’s work together!
          </h1>
          <p className="desc wow animate__animated animate__fadeInLeft">
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </p>
        </div>

        <form action="" className="wow animate__animated animate__zoomIn">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className="input_item">
              <label>Your Name</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input_item">
              <label>Your Email</label>
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div className="input_item">
            <label>Your Message</label>
            <textarea></textarea>
          </div>
          <button className="btn_submit">Send Message</button>
        </form>
      </div>
    </WowWrapper>
  );
};

export default FormContect;
