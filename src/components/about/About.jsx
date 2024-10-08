import React from 'react'
import './about.css'
import bgAbout from "../../assets/bg-5.jpg"
import profile from "../../assets/ruthik.png"

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-bg">
            <img src={bgAbout} alt="about" />
        </div>
        <div className="about-container">
            <h1 className='page-heading'>About</h1>
            <div className="about-inner-container">
                <div className="about-text">
                    <h1>Ruthik Jorigala</h1>
                    <p>As a passionate web developer, I specialize in crafting visually stunning and highly functional user interfaces. With a strong foundation in React and TypeScript, I excel at building responsive and animated websites that deliver exceptional user experiences. My expertise extends to the full stack, where I leverage the MERN stack to develop robust web applications from the ground up. I am committed to staying up-to-date with the latest industry trends and technologies to consistently deliver innovative and high-quality solutions.</p>
                </div>
                <div className="about-image">
                    <img src={profile} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
