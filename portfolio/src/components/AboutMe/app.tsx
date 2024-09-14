import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/AboutMe/styles.css'
import zimo from './../../images/pictures/zimo-profile.png'
import { TypeAnimation } from 'react-type-animation';



const AboutMe: FC = () => {
    return (
      <>
        <div className = "cont">
          <h1>
            About Me
          </h1>
          <div className = "web-development">
            I have a keen interest in all aspects of Web development, especially the Frontend World. 
            I am passionate about providing the best outcomes for User Experience, by integrating
            design ideas from multiple perspectives.
          </div>
          <div className = "ai">
            I have recently developed a fascination for Artificial Intelligence,
            especially Generative AI and Computer Vision. I've enjoyed exploring these new
            and exciting domains, some of which I have used in this website!
          </div>
        </div>
      </>
    );
};

export default AboutMe;