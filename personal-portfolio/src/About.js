import React, { useState } from 'react';
import './About.css';
import imgSharan from "./images/img_sharan.jpg";
const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={imgSharan} alt=""/>
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>Hi, I'm the CEO and co-founder of DigitalEvolution S.A.  DigitalEvolution S.A. was founded by me and three more students of the CFGS ASIX of Mallorca. This is my Portfolio.</p>

                        <div className="tab-titles">
                            <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>Skills</p>
                            <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => openTab('experience')}>Experience</p>
                            <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>Education</p>
                        </div>

                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li><span>UI/UX</span><br/>Designing Web/App interfaces</li>
                                <li><span>Web development</span><br/>Web app Development with REACT</li>
                                <li><span>App development</span><br/>Building Android/IOS apps</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>2021-Current</span><br/>CEO of DigitalEvolution S.A.</li>
                                <li><span>2019-2021</span><br/>CEO of Tech Sharan</li>
                                <li><span>2016-2017</span><br/>Teacher at CEIP SES ROTES VELLES</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
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