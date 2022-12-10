import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Styles/Style.css";
import logo from '../../../images/R_logo.svg.png'

const Header = () => {
  return (
    <div className="">
      <div className="navbar bgColor lg:px-14">
        <div className=" flex flex-1">
          <Link>
          <img src={logo} className='w-24' alt="logo"/>
          </Link>
        
        </div>

        <div className="flex-none  flex-end">
          <ul>
            <li>
              <a href='#home'className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white ">Home</a>
              <a href='#projects' className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white">Projects</a>
              <a href="#contact" className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white">Contact Me</a>
              <a href="#about" className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white">About Me</a>
              <a target="_blank" download="https://drive.google.com/file/d/1Gcpih9Wca0C5f7yD9pAKOCzYryCkEmpQ/view?usp=share_link" href='https://drive.google.com/file/d/1Gcpih9Wca0C5f7yD9pAKOCzYryCkEmpQ/view?usp=share_link' className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white">Resume</a>
            </li>
          </ul>

         
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Header;
