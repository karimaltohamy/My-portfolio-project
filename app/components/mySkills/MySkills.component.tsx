import React from "react";
import "./mySkills.scss";
import Image from "next/image";
import htmlImg from "../../../assets/images/html-5.png";
import cssImg from "../../../assets/images/css3.png";
import jsImg from "../../../assets/images/js.webp";
import reactImg from "../../../assets/images/react.webp";
import tailwindImg from "../../../assets/images/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";
import bootstrapdImg from "../../../assets/images/bootstrap-logo.svg";
import nodeImg from "../../../assets/images/programing.png";
import vueImg from "../../../assets/images/document.png";

const MySkills = () => {
  return (
    <div className="my_skills_section">
      <div className="container">
        <div className="head_section">
          <h1 className="title wow animate__animated animate__fadeInDown">
            My Skills
          </h1>
          <p className="desc wow animate__animated animate__fadeInLeft">
            I put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className="skills wow animate__animated  animate__slideInDown">
          <div className="skill">
            <Image src={htmlImg} alt="skill-img" loading="lazy" />
            <h4>Html</h4>
          </div>
          <div className="skill">
            <Image src={cssImg} alt="skill-img" loading="lazy" />
            <h4>Css</h4>
          </div>
          <div className="skill">
            <Image src={jsImg} alt="skill-img" loading="lazy" />
            <h4>JavaScript</h4>
          </div>
          <div className="skill">
            <Image src={reactImg} alt="skill-img" loading="lazy" />
            <h4>React js</h4>
          </div>
          <div className="skill">
            <Image src={tailwindImg} alt="skill-img" loading="lazy" />
            <h4>Tailwind</h4>
          </div>
          <div className="skill">
            <Image src={bootstrapdImg} alt="skill-img" loading="lazy" />
            <h4>Bootstrap</h4>
          </div>
          <div className="skill">
            <Image src={vueImg} alt="skill-img" loading="lazy" />
            <h4>Vue js</h4>
          </div>
          <div className="skill">
            <Image src={nodeImg} alt="skill-img" loading="lazy" />
            <h4>Node js</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
