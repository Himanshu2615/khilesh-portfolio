import React, { useContext } from 'react';
import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';
import OrangeThemeBoy from '../../assets/svg/about/orangeTheme-boy.svg'; // Import the SVG

function About() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>
                        {aboutData.description1}<br/><br/>{aboutData.description2}
                    </p>
                </div>
                <div className="about-img">
                    <img 
                        src={OrangeThemeBoy}  // Use the imported SVG directly
                        alt="Profile illustration" 
                    />
                </div>
            </div>
        </div>
    )
}

export default About;