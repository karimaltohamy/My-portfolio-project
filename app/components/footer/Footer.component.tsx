import React from "react";
import "./footer.scss";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo w-[50px] h-[50px] mx-auto flex items-center justify-center border-2 border-white">
          <span className="text-[30px] font-bold">K</span>
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
        <p className="desc">© All Rights Reserved by Karim Altohamy</p>
      </div>
    </footer>
  );
};

export default Footer;
