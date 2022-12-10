import React from "react";
import AboutMe from "../About/AboutMe";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
