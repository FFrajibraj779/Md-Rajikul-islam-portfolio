import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard]/SingleCard";



const Projects = () => {
  const [projectData, setProjectData]= useState([]);

   
  useEffect(()=>{
    fetch('https://rajikul-portfolio-server.vercel.app/projectdata')
    .then(res=>res.json())
    .then(data=>setProjectData(data))
  },[])


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

      
          {
            projectData.map(singleData=><SingleCard
            key={singleData.id}
            singleData={singleData}
            ></SingleCard>)
          }

        </div>


      </div>
    </div>
  );
};

export default Projects;
