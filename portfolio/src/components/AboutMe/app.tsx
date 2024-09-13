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
          <div>
            I have a keen interest in all aspects of Web development, especially the Frontend 
            World 
            When people ask me to describe myself and my passion for developing, I usually can't pin it down to one thing. 
            Here are the things that fuel 
            I am a passionate junior developer who wants to make an impact with the code that I write. I am always looking for 
            opportunities to 
          </div>
        </div>
      </>
    );
};

export default AboutMe;