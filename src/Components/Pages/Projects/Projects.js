import React from "react";
import masterBuilder from "../../../images/master-builder.png";
import learningImg from "../../../images/learning-programming.png";
import programmingimg from "../../../images/programming-context.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className="lg:px-14 px-4 mb-10">
      <div>
        <h2
          className="lg:text-5xl text-3xl
        uppercase text-[#818AA9] font-bold text-center my-14 "
        >
          Projects
          <hr className="w-3/12  mx-auto mb-4" />
        </h2>

        <div className="flex lg:flex-row  flex-col lg:gap-10 gap-4">
          <div className="card  shadow-xl border ">
            <figure>
              <img src={masterBuilder} alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Master Builder</h2>
              <p className='text-xl'>
                On this site, people add any construction service and also buy
                any service  People can log in or sign up with firebase
              </p>
              <div className="card-actions justify-end">
                <a
                  target="_blank"
                  href="https://master-builder-assignment.web.app/"
                >
                  <button className=" btn btn-outline bgColor ">
                    Live side
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/FFrajibraj779/master-builder-cline-as11"
                >
                  <button className=" btn btn-outline bgColor ">
                    client side code
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/FFrajibraj779/master-builder-server"
                >
                  <button className=" btn btn-outline bgColor ">
                    server side code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="card border">
            <figure>
              <img src={learningImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Learning Programming </h2>
              <p className='text-xl'>learning programming is a also full stack project .in this project , i use react js, node js , Express js.</p>
              <div className="card-actions justify-end">
                <a target="_blank" href="https://assignment10-c02d5.web.app/">
                  <button className=" btn btn-outline bgColor ">
                    Live side
                  </button>
                </a>

                <a
                  target="_blank"
                  href="https://github.com/FFrajibraj779/learning-programming"
                >
                  <button className=" btn btn-outline bgColor ">
                    client side code
                  </button>
                </a>

                <a
                  target="_blank"
                  href="https://github.com/FFrajibraj779/learning-programming-server"
                >
                  <button className=" btn btn-outline bgColor ">
                    server side code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="card border ">
            <figure>
              <img src={programmingimg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Programming Context </h2>
              <p className='text-xl'>
                Simple quiz-related website  If users click the right answer
                shows a popup correct answer or show the wrong answer Users
                also see the correct answer click on the icon
              </p>

              <div className="card-actions">
                <a
                  target="_blank"
                  href="https://charming-salamander-0ceee5.netlify.app/"
                >
                  <button className=" btn btn-outline bgColor ">
                    Live side
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/FFrajibraj779/programming-context-as9"
                >
                  <button className=" btn btn-outline bgColor ">client</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
