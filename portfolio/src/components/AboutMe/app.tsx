import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/AboutMe/styles.css'
import zimo from './../../images/pictures/zimo-profile.png'
import ImageCarousel from '../general/carousel';
import { TypeAnimation } from 'react-type-animation';
import Marquee from 'react-fast-marquee';



const AboutMe: FC = () => {
    return (
      <div className = "aboutme">
        <div className = "cont">
          <h1>
            About Me
          </h1>
          <div className = "web-dev">
            I have a keen interest in all aspects of Web development, especially the Frontend World. 
            I am passionate about providing the best outcomes for User Experience.<br/>
            I also have a fascination for Artificial Intelligence. Here are some of the topics that interest me:
          </div>
          <Marquee>
            I can be a React component, multiple React components, or just some text.
          </Marquee>
        </div>
      </div>
      
    );
};

export default AboutMe;