import React from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerimg from "../../../images/rajikl.png";
import "../../Styles/Style.css";
AOS.init();

const Banner = () => {
  return (
    <div>
      <div className="hero bgColor  lg:px-14">
        <div className="hero-content  flex-col lg:flex-row-reverse p-0">
          <div
            className="lg:w-1/2"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={bannerimg} className="" alt="" />
          </div>
          <div className="lg:w-1/2 p-4"  data-aos="fade-down">
            <h1 className=" text-3xl lg:text-5xl  font-bold">
              <Typewriter
                options={{
                  strings: [
                    ` Hi ! I AM RAJIKUL <br />
                  FRONTEND DEVELOPER`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="py-6 font-sans lg:text-lg">
              Dedicated And Efficient Frontend Developer Working With
              Javascript, Node Js, and React Js. I`m a fast learner and Can
              Quickly integrate into the team so I can provide value to the
              company and the customers.
            </p>
            <a href="#contact">
              <button className=" btn btn-outline bgColor ">Hire Me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
