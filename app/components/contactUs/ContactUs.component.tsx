import React from "react";
import "./contactUs.scss";
import FormContect from "../formContact/FormContect.component";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import WowWrapper from "../wowWrapper/WowWrapper.component";

const ContactUs = () => {
  return (
    <WowWrapper>
      <div className="contact_us_section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <FormContect />
            <div className="w-full h-full flex items-center justify-center">
              <ul className="items_contact">
                <li className="wow animate__animated animate__fadeInLeft">
                  <div className="icon">
                    <FiPhoneCall size={25} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <span>01007468461</span>
                  </div>
                </li>
                <li className="wow animate__animated animate__fadeInRight">
                  <div className="icon">
                    <HiOutlineMail size={25} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <span>karimaltohmay0@gmail.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </WowWrapper>
  );
};

export default ContactUs;
