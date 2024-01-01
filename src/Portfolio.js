import React from 'react';
import './Portfolio.css';
import work1 from "./images/work-1.png";
import work2 from "./images/work-2.png";
import work3 from "./images/work-3.png";
const Portfolio = () => {
    return (
        
        <div id="portfolio">
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <img src={work1} alt=""/>
                    <div className="layer">
                        <h3>Timetable website.</h3>
                        <p>The app that disciplines talented people.  Click to see the source code on my Git Hub</p>
                        <a href="https://github.com/sharan-lakhwani0/first-project" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className="work">
                    <img src={work2} alt=""/>
                    <div className="layer">
                        <h3>String Converter Website</h3>
                        <p>Writing is love. Better than Grammarly.  Click to see the source code on my Git Hub</p>
                        <a href="https://github.com/sharan-lakhwani0/second-project" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className="work">
                    <img src={work3} alt=""/>
                    <div className="layer">
                        <h3>TO-DO App</h3>
                        <p>The app that is better than TODOist.  Click to see the source code on my Git Hub</p>
                        <a href="https://github.com/sharan-lakhwani0/third-project" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>


            </div>
            <a href="https://github.com/sharan-lakhwani0/REACT-website" target="_blank" className="btn">See More</a>
        </div>
    </div>
    
    );
  };
  
  export default Portfolio;