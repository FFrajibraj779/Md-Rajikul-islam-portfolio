import React from "react";
import rajikul from "../../../images/rajikul.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutMe = () => {
  return (
    <div className="lg:px-14 my-20" id="about">
      <h2
        className="lg:text-5xl text-3xl
        uppercase text-[#818AA9] font-bold text-center my-10 "
      >
        About Me
        <hr className="w-3/12 mx-auto mb-4" />
      </h2>

      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3500"
          >
            <img
              src={rajikul}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
          </div>
          <div
            className="mt-4"
            data-aos="fade-right"

            data-aos-offset="500"
            data-aos-duration="3500"
          >
            <h1 className="text-4xl font-bold text-[#]">RAJIKUL </h1>
            <h1 className="text-2xl font-bold text-[#]">Frontend Developer </h1>
            <p className="py-6 text-xl ">
              Hi <br /> I'm rajikul. frontend developer from Bangladesh.
              currently, I had completed mern stack web development course from
              programming hero . i am gain a lot of knowledge about html , css ,
              javascript , react js, node js . now i am ready for working with
              others . i have completed some project with react js. I`m a fast
              learner and Can Quickly integrate into the team so I can provide
              value to the company and the customers. if you interested for my
              work and services. please contact me
              <br /> thanks for visiting my profile
            </p>
            <button className=" btn btn-outline bgColor ">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
