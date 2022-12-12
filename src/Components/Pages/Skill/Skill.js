import React from "react";
import Marquee from "react-fast-marquee";
import html from "../../../images/html.png";
import css from "../../../images/css.png";
import js from "../../../images/js.png";
import react from "../../../images/react.png";
import node from "../../../images/node.png";
import express from "../../../images/express.png";
import mongodb from "../../../images/mongodb.png";
import tailwind from "../../../images/tailwind.png";
import github from "../../../images/github.png";
import reactjs from "../../../images/reactjs1.png";
import '../../Styles/Style.css'



const image = [
  {
    id:"1",
    img:html,
  },
  {
    id:"2",
    img:css,
  },
  {
    id:"3",
    img:js,
  },
  {
    id:"4",
    img:reactjs,
  },
  {
    id:"5",
    img:github,
  },
  {
    id:"6",
    img:mongodb,
  },
  {
    id:"7",
    img:node,
  },
  {
    id:"8",
    img:express,
  },
  {
    id:"9",
    img:tailwind
  }
]


const Skill = () => {


const skill = "html css javascript react js node js express js mongodb "
console.log(skill);
const sk = skill.split(" ")
console.log(sk);

console.log(image);

  return (
    <div>
       <h2
        className="lg:text-5xl text-3xl
        uppercase text-[#818AA9] font-bold text-center my-10 "
      >
        SKILL
        <hr className="w-2/12 mx-auto mb-4" />
      </h2>

    <div className="Body">
    <div className="circle">
      <div className="logo">
   
      </div>

      <Marquee>
      <div className="text flex gap-5 ">
     
   {
    image.map((char, i)=>

    <img src={char.img} alt="" className={` w-24 hover:bg-white`}/>


  )
   }
      </div>
    </Marquee>

    </div>
    </div>

    </div>
  );
};

export default Skill;
