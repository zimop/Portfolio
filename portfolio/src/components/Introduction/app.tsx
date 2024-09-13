import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/Introduction/styles.css'
import zimo from './../../images/pictures/zimo-profile.png'
import { TypeAnimation } from 'react-type-animation';



const Introduction: FC = () => {
    return (
      <div className = "first">
        <div className = "intro-container">
            <div className = "image">
                 <img src = {zimo} className = "profile-container"/>
            </div>
            <div className = "description">
                <h1>Hi, My Name is Zimo</h1>
                <h2>I'm a developer that loves</h2>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'React.js',
                        1000,
                        'Next.js',
                        1000,
                        'Artificial Intelligence',
                        1000,
                        'Computer Vision',
                        1000,
                        'Java',
                        1000,
                        'Python',
                        1000,
                        'Solving Problems',
                        1000,
                        'Creating',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={1}
                />
            </div>
        </div>
      </div>
    );
};

export default Introduction;