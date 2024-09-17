import React from 'react'
import './skills.css'
import bgSkill from "../../assets/bg-2.jpg"
import html from "../../assets/skills/html.png"
import css from "../../assets/skills/css.png"
import js from "../../assets/skills/js.png"
import ts from "../../assets/skills/ts.png"
import react from "../../assets/skills/react.png"
import node from "../../assets/skills/node.png"
import mongoDB from "../../assets/skills/mongoDB.png"
import sass from "../../assets/skills/sass.png"
import vscode from "../../assets/skills/vscode.png"
import express from "../../assets/skills/ex.png"
import tailwind from "../../assets/skills/tailwind.png"
import redux from "../../assets/skills/redux.png"

const Skills = () => {
  return (
    <div className='skills'>
        <div className="skills-bg">
            <img src={bgSkill} alt="" />
        </div>
      <div className="skills-container">
        <h1 className='page-heading'>SKILLS</h1>

        <div className="skills-inner-container">
            <div className="skill-container">
                <div className='skill-img-container'>
                    
                    <img src={html} alt="html" />
                </div>
                <h5 className='skill-name'>HTML</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={css} alt="html" />
                </div>
                <h5 className='skill-name'>CSS</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container js'>
                    <img src={js} alt="html" />
                </div>
                
                <h5 className='skill-name'>JAVASCRIPT</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={ts} alt="html" />
                </div>
                
                <h5 className='skill-name'>TYPESCRIPT</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={react} alt="html" />
                </div>
                
                <h5 className='skill-name'>REACT</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={node} alt="html" />
                </div>
                
                <h5 className='skill-name'>NODE</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={mongoDB} alt="html" />
                </div>
                
                <h5 className='skill-name'>MONGO DB</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={express} alt="html" />
                </div>
                
                <h5 className='skill-name'>EXPRESS</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={sass} alt="html" />
                </div>
                
                <h5 className='skill-name' >SASS</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={vscode} alt="html" />
                </div>
                
                <h5 className='skill-name'>VSCODE</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={tailwind} alt="html" />
                </div>
                
                <h5 className='skill-name'>TAILWINDCSS</h5>
            </div>
            <div className="skill-container">
                <div className='skill-img-container'>
                    <img src={redux} alt="html" />
                </div>
                
                <h5 className='skill-name'>REDUX</h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
