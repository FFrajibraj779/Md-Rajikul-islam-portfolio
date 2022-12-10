import React from "react";
import bannerimg from "../../../images/rajikl.png";
import "../../Styles/Style.css";

const Banner = () => {
  return (
    <div>
      <div className="hero bgColor py-8 px-4">
        <div className="hero-content  flex-col lg:flex-row-reverse ">
          <div className="lg:w-1/2 ">
            <img src={bannerimg} className="max-w-sm rounded-lg " alt="" />
          </div>
          <div className="lg:w-1/2 ">
            <h1 className="lg:text-5xl font-bold">
              Hi ! I AM RAJIKUL <br />
              FRONTEND DEVELOPER
            </h1>
            <p className="py-6 font-sans lg:text-lg">
              Dedicated And Efficient Frontend Developer Working With
              Javascript, Node Js, and React Js. I`m a fast learner and Can
              Quickly integrate into the team so I can provide value to the
              company and the customers. et a id nisi.
            </p>
            <button className="btn btn-primary">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
