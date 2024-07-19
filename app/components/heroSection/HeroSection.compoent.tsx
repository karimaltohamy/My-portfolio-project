import React from "react";
import "./heroSection.scss";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero_section">
      <div className="container">
        <div className="content">
          <span className="subtitle">
            <small></small> AVAILABLE FOR WORK
          </span>
          <h1 className="title ">
            Karim <br /> Altohamy
          </h1>
        </div>

        <div className="balls_container">
          <div className="color-ball red"></div>
          <div className="color-ball yellow"></div>
          <div className="color-ball cyan"></div>
        </div>

        <ul className="social_media">
          <li>
            <a href="https://www.linkedin.com/in/karim-altohamy-816a57235/">
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/karimaltohamy">
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/karim.badr.92167?mibextid=LQQJ4d">
              <FaFacebookF size={24} />
            </a>
          </li>
          <li>
            <a href="https://x.com/karim_altohamy">
              <FaTwitter size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
