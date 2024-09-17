import React from "react";
import "./hero.css";
import bgExperience from "../../assets/bg-1.jpg"
import { FaLinkedinIn , FaGithub  } from "react-icons/fa";
import IconCloud from "../IconsGlobe";


const Hero = () => {
  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "flutter",
    "tailwindcss",
    "html5",
    "css3",
    "express",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "redux",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
  ];
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-bg">
              <img src={bgExperience} alt="" />
          </div>
        <div className="hero-text">
          <h1>Ruthik Jorigala</h1>
          <h4>Fullstack developer</h4>
          <p>Creating captivating digital experiences. I'm a full-stack web developer specializing in UI design, responsive layouts, and animations. Let's build something amazing together.</p>
          <div className="hero-text-interactions">
              <button className="button">Download Resume
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_30_96)">
                    <path
                        fill="white"
                        d="M0.479167 11.5C0.203024 11.5 -0.0208333 11.7239 -0.0208333 12C-0.0208333 12.2761 0.203024 12.5 0.479167 12.5V11.5ZM22.9231 12.3536C23.1184 12.1583 23.1184 11.8417 22.9231 11.6464L19.7411 8.46447C19.5459 8.2692 19.2293 8.2692 19.034 8.46447C18.8388 8.65973 18.8388 8.97631 19.034 9.17157L21.8625 12L19.034 14.8284C18.8388 15.0237 18.8388 15.3403 19.034 15.5355C19.2293 15.7308 19.5459 15.7308 19.7411 15.5355L22.9231 12.3536ZM0.479167 12.5H22.5696V11.5H0.479167V12.5Z"
                    ></path>
                    </g>
                    <defs>
                    <clipPath id="clip0_30_96">
                        <rect fill="white" height="24" width="24"></rect>
                    </clipPath>
                    </defs>
                </svg>
              </button>
              <div className="hero-icons">
                <FaLinkedinIn className="hero-icon" />
                <FaGithub className="hero-icon" />
              </div>

          </div>
          <div className="hero-contact">
            <p>jorigalaruthik492@gmail.com</p>
            <p>+91 9866699275</p>
          </div>
        </div>
        <div className="hero-img">
        
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
};

export default Hero;


