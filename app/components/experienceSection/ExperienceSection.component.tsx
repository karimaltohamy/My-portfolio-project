import React from "react";
import "./experienceSection.scss";
import { PiBagSimpleBold } from "react-icons/pi";

const ExperienceSection = () => {
  return (
    <div className="experience_section">
      <div className="container">
        <h1 className="head_title">
          <PiBagSimpleBold size={35} />
          My Experience
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10">
          <div className="experience_box">
            <div className="head_box">
              <span className="subtitle">Apr 2023 - Present</span>
              <h3 className="title">FrontEnd Developer</h3>
              <small>5Code Company</small>
            </div>

            <p className="desc">
              I worked on a variety of projects, including landing pages and a
              major SaaS dashboard for Internet distribution. Here are some of
              the key contributions I made:
            </p>
            <ul>
              <li>
                - Led the development of a comprehensive SaaS dashboard with
                pages for subscribers, online subscribers, managers, NAS,
                packages, settings, reports, NAS groups, tools, and other
                essential functions. The dashboard also included dedicated pages
                for charts to offer detailed data visualization.
              </li>
              <li>
                - Enhanced the user experience by designing intuitive interfaces
                and efficient navigation flows, ensuring seamless interactions
                for both subscribers and managers.
              </li>
            </ul>
          </div>
          <div className="experience_box">
            <div className="head_box">
              <span className="subtitle">Apr 2023 - Present</span>
              <h3 className="title">FrontEnd Developer</h3>
              <small>5Code Company</small>
            </div>
            <p className="desc">
              I worked on a variety of projects, including landing pages and a
              major SaaS dashboard for Internet distribution. Here are some of
              the key contributions I made:
            </p>
            <ul>
              <li>
                - Led the development of a comprehensive SaaS dashboard with
                pages for subscribers, online subscribers, managers, NAS,
                packages, settings, reports, NAS groups, tools, and other
                essential functions. The dashboard also included dedicated pages
                for charts to offer detailed data visualization.
              </li>
              <li>
                - Enhanced the user experience by designing intuitive interfaces
                and efficient navigation flows, ensuring seamless interactions
                for both subscribers and managers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
