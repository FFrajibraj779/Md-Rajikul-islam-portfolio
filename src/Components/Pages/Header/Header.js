import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Styles/Style.css";

const Header = () => {
  return (
    <div>
      <div className="navbar bgColor">
        <div className="">
        
        </div>

        <div className="flex-none mx-auto">
          <ul>
            <li>
              <Link className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white ">Home</Link>
              <Link className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white">Works</Link>
              <Link className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white">Contact Me</Link>
              <a href='https://drive.google.com/file/d/1Gcpih9Wca0C5f7yD9pAKOCzYryCkEmpQ/view?usp=share_link' className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white">Resume</a>
            </li>
          </ul>

         
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Header;
