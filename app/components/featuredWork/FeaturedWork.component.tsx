"use client";

import { portfolioData } from "@/utils/data";
import Link from "next/link";
import React, { useState } from "react";
import "./featuredWork.scss";

import Image from "next/image";
import WowWrapper from "../wowWrapper/WowWrapper.component";

const FeaturedWork = () => {
  const [projects, setProjects] = useState<any[]>(portfolioData);

  return (
    <WowWrapper>
      <div className="featured_work">
        <div className="container">
          <div className="head_section">
            <h1 className="title wow animate__animated  animate__lightSpeedInLeft">
              FEATURED <br /> WORK
            </h1>
            <p className="desc wow animate__animated  animate__lightSpeedInRight">
              My creative spirit comes alive in the digital realm. With nimble
              fingers flying across the keyboard, I craft clear experiences out
              of nothing but ones and zeroes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.length > 0 &&
              projects.map((item, i) => {
                return (
                  <Link
                    href={item.link}
                    className="project_box wow animate__animated animate__zoomIn"
                    key={i}
                  >
                    <div className="image">
                      <Image
                        src={item.image}
                        alt="img-porject"
                        loading="lazy"
                      />
                    </div>
                    <div className="text">
                      <div>
                        <h4 className="title">{item.title}</h4>
                        <span className="subtitle">{item.desc}</span>
                      </div>
                      <div className="year">{item.year}</div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </WowWrapper>
  );
};

export default FeaturedWork;
