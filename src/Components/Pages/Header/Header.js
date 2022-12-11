import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Styles/Style.css";
import logo from "../../../images/R_logo.svg.png";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <a
          href="/"
          className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white "
        >
          Home
        </a>
        <a
          href="#projects"
          className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white"
        >
          Contact Me
        </a>
        <a
          href="#about"
          className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white"
        >
          About Me
        </a>
        <a
          target="_blank"
          download="https://drive.google.com/file/d/1Gcpih9Wca0C5f7yD9pAKOCzYryCkEmpQ/view?usp=share_link"
          href="https://drive.google.com/file/d/1Gcpih9Wca0C5f7yD9pAKOCzYryCkEmpQ/view?usp=share_link"
          className="mr-2 lg:text-lg font-semibold text-[#CCD6F6] hover:text-white"
        >
          Resume
        </a>
      </li>
    </>
  );
  return (
    <div className="">
      {/* <div className="navbar bgColor lg:px-14">
        <div className=" flex flex-1 mr-5">
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
      </div> */}
      <div className="navbar lg:flex   bgColor lg:px-14">

        <div className="navbar-start ">
          <div className="dropdown lg:hidden  ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 border rounded-box w-52"
            >
         {menuItems}
            </ul>
          </div>
        <ul className="hidden lg:block">
        { menuItems}
        </ul>
        </div>

        <div className="navbar-end   ">
        <Link to='/'>
          <img src={logo} className='w-24' alt="logo"/>
          </Link>
        </div>
     
      </div>
      <hr />
    </div>
  );
};

export default Header;
