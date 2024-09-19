import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/AboutMe/styles.css'
import zimo from './../../images/pictures/zimo-profile.png'
import { TypeAnimation } from 'react-type-animation';
import Marquee from 'react-fast-marquee';



const AboutMe: FC = () => {
    return (
      <div className = "centering">
        <div className = "aboutme">
          <div className = "cont">
            <h1>
              About Me
            </h1>
            <div className = "web-dev">
              I have a keen interest in all aspects of Web development, especially the Frontend World. 
              I am passionate about providing the best outcomes for User Experience.
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;