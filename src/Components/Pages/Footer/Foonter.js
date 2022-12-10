import React from "react";
import logo from "../../../images/R_logo.svg.png";
import facebook from "../../../images/facebook.png";
import github from "../../../images/github.png";
import likedin from "../../../images/linkedin.png";
import { Link } from "react-router-dom";

const Foonter = () => {
  return (
    <div>
      <hr />
      <footer className="footer p-10  text-white">
        <div>
          <img src={logo} className="w-16 " alt="logo" />
          <p>
            Md Rajikul Islam
            <br />
            Frontend Developer
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/md-rajikul-islam/"
            >
              <img src={likedin} className="w-8" alt="logo" />
            </a>
            <a target="_blank" href="https://github.com/FFrajibraj779">
              <img src={github} className="w-8 bg-white" alt="logo" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100059717085242"
            >
              <img src={facebook} className="w-8 " alt="logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foonter;
