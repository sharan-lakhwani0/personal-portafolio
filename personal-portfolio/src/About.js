import React, { useState } from 'react';
import './About.css';
import imgSharan from "./images/img_sharan.jpg";

const About = () => {
    
    return (
        

        <div id="about">
        <div classNameName="container">
            <div className="row">
                <div className="about-col-1">
                    <img src={imgSharan} alt=""/>
                </div>
                <div className="about-col-2">
                    <h1 className="sub-title">About Me</h1>
                    <p>Hi, I'm the CEO and co-founder of DigitalEvolution S.A.  DigitalEvolution S.A. was founded by me and three more students of the CFGS ASIX of Mallorca.This is my Porfolio.</p>

                    <div className="tab-titles">
                        <p className="tab-links active-link" onclick="opentab('skills')">Skills</p>
                        <p className="tab-links" onclick="opentab('experience')">Experience</p>
                        <p className="tab-links" onclick="opentab('education')">Education</p>
                    </div>
                    <div className="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>UI/UX</span><br/>Designing Web/App interfaces</li>
                            <li><span>Web development</span><br/>Web app Development with REACT</li>
                            <li><span>App development</span><br/>Building Android/IOS apps</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="experience">
                        <ul>
                            <li><span>2021-Current</span><br/>CEO of  DigitalEvolution S.A.</li>
                            <li><span>2019-2021</span><br/>CEO of Tech Sharan</li>
                            <li><span>2016-2017</span><br/>Teacher at CEIP SES ROTES VELLES</li>
                        </ul>
                    </div>

                    <div className="tab-contents" id="education">
                        <ul>
                            <li><span>2012</span><br/>GRADUATED IN CHEMESTRY ENGINEERING UIB</li>
                            <li><span>2018</span><br/>MBA UIB</li>
                            <li><span>2024</span><br/>CFGS ASIR IES EMILI DARDER</li>
                        </ul>
                    </div>

                </div>                
            </div>
        </div>
    </div>
    );
  };
  
  export default About;