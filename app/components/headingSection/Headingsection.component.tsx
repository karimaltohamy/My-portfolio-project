import React from "react";
import "./headingSection.scss";
import Marquee from "react-fast-marquee";

const Headingsection = () => {
  return (
    <div className="heading_section">
      <div className="px-5 md:px-8">
        <Marquee>
          <span className="inner">Karim Alotohamy</span>
          <span>Frontend Developer</span>
        </Marquee>
      </div>
    </div>
  );
};

export default Headingsection;
