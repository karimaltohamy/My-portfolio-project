"use client";

import { useEffect } from "react";
import { WOW } from "wowjs";
import "animate.css/animate.min.css";

const WowWrapper = ({ children }: { children: any }) => {
  useEffect(() => {
    new WOW({
      boxClass: "wow",
      animateClass: "animate__animated",
      offset: 0,
      mobile: true,
      live: true,
    }).init();
  }, []);

  return <>{children}</>;
};

export default WowWrapper;
