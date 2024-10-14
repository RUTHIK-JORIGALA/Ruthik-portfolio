import React from "react";
import "./projects.css";
import bgExperience from "../../assets/bg-3.jpg";
import projectImg1 from "../../assets/project-01.png"
import projectImg2 from "../../assets/project-02.png"

const Projects = () => {
  return (
    <div className="projects">
      <div className="experience-bg">
        <img src={bgExperience} alt="" />
      </div>

      <div className="projects-container">
        <h1 className="page-heading">Projects</h1>
        <div className="projects-inner-container">
          <div className="project-container">
            <figure>
              <img src={projectImg1} alt="Ecommerce" className=""  />
              <figcaption>MERN Stack Ecommerce Website</figcaption>
            </figure>
            <div className="project-contrrols">
              
            <a href=""><button className="btn" disabled>Live view</button></a>
            <a href="https://github.com/RUTHIK-JORIGALA/AdornEdge-ecommerce-frontend"><button className="btn">Source code</button></a>
            </div>
          </div>
          <div className="project-container">
            <figure>
              <img src={projectImg2} alt="Ecommerce" className=""  />
              <figcaption>MERN Stack Ecommerce Website</figcaption>
            </figure>
            <div className="project-contrrols">
              
            <a href="https://glamcart.vercel.app/"><button className="btn">Live view</button></a>
            <a href="https://github.com/RUTHIK-JORIGALA/GlamCart-Ecommerce"><button className="btn">Source code</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
