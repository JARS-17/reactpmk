import React from 'react';
import './About.css';
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>About PMK ITERA</h3>
        <p>Welcome to PMK ITERA, a church located in East Jakarta, Indonesia. Our mission is to provide a welcoming and nurturing environment for individuals seeking spiritual growth and community connection.</p>
        <p>
          With a focus on inclusivity and compassion, we offer a variety of services and programs to support our members on their spiritual journey. Join us at PMK ITERA and become part of a supportive community dedicated to personal and
          collective growth.
        </p>
      </div>
    </div>
  );
};

export default About;
