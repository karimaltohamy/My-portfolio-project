import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./header.scss";
import DownloadButton from "../downloadButton/DownloadButton.component";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo w-[45px] h-[45px] flex items-center justify-center border-2 border-white">
            <span className="text-[25px] font-bold">K</span>
          </div>
          <div className="flex items-center gap-5">
            <DownloadButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
