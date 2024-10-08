import React from 'react'
import './experience.css'
import bgExperience from "../../assets/bg-3.jpg"
import lbLogo from "../../assets/Logo-03.jpg"

const Experience = () => {
  return (
    <div className='experience' id='experience'>
         <div className="experience-bg">
            <img src={bgExperience} alt="" />
        </div>
        <div className="experience-container">
          <h1 className='page-heading'>Experience</h1>
          
          <div className="experience-innner-container">
            <div className="experience1">
              <div className="experience-text">
                <p><strong>Role:</strong> <span>Full Stack developer</span></p>
                <p><strong>Duration:</strong> <span>Aug-2023 to present</span></p>
                <p><strong>Project:</strong> <span>Listbutler - Saas appliaction</span></p>
                <p> <strong>Company:</strong> <span>AARON'S E-COMMERCE WALA PRIVATE LIMITED</span></p>
                <p><strong>Description:</strong> <span>Listbutler is a SaaS application, An enterprise platform for eCommerce Sellers on Amazon, Walmart and more; that manages and optimizes products on various platforms offering comprehensive optimizing tools for high-ranking SEO, Retail Media Templates, Data Insights and alike by leveraging AI to generate high-quality SEO Components.
                </span></p>
              </div>
              <div className="experience-image">
                <img src={lbLogo} alt="" />
              </div>
              
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Experience
