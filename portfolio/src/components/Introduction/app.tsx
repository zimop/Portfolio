import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/Introduction/styles.css'
import zimo from './../../images/pictures/zimo-profile.png'
import laptop from './../../images/icons/video-lesson.png'
import { TypeAnimation } from 'react-type-animation';
import Logo from '../general/Logo';
import { Button } from '@mui/material';
import AnimateLetters from '../general/AnimateLetters';


const Introduction: FC = () => {
    const zpath = "m183.1 505.9h-1.1l-61.2-35.7c-1.2-.7-1.9-1.7-1.9-3l-.3-40 .3-.3v-.8l114.7-247.1-50.5 29h-1.9c0-.2-.1-.3-.3-.3l-.5-.3-60.7-35.2c-1.1-.7-1.6-1.8-1.6-3.2l-.3-40c.2-1.2.8-2.2 1.9-2.7 138.8-80.1 208.5-120.2 209.2-120.2s11.3 5.9 31.8 17.9 30.8 18 31 18.1l.5.5c0 .2.1.3.3.3l.5 1.3.3 20.7c0 13.8-.2 20.9-.5 21.2l-114.4 247.1c33.5-19.5 50.6-29.3 51.3-29.3s11.4 6 32 18l31.1 18.3.3.3c0 .2.1.3.3.3l.3.5.3 1.6.3 39.7c0 1.2-.6 2.2-1.9 3-138.9 80.2-208.6 120.3-209.3 120.3zm-4.6-307.8v-31.4l-53.2-30.9v31.2zm.8 297.8v-31.4l-53.2-30.9v31.4zm1.9-38.6 157.4-338.9-94 54.2-117.4 253.2zm.8-296.8 200-115.5-53.2-31.1-200 115.8zm51.9 268.3 149.3-85.9-53.4-31.1-56.7 32.8z"
    const ppath = "m183.4 505.9h-1.1l-.5-.3h-.3l-60.4-35.4c-1.2-.7-1.9-1.7-1.9-3l-1.1-338.1c.2-1.1.8-2 1.9-2.7 138.7-80.2 208.5-120.3 209.2-120.3s11.5 6 32.2 18l30.6 18 .5.5c0 .2.1.3.3.3l.5 1.3.5 189.3c0 1.4-.6 2.5-1.9 3.2l-170.8 98.8.3 146.6c0 1.4-.6 2.5-1.9 3.2-23.1 13.8-35.2 20.6-36.1 20.6zm-3.8-10-.8-329-53.2-31.1.8 329.2zm2.7-335.4 200-115.4-53.2-30.9-200 115.5zm4.6 335.4 27.4-15.6-.5-146.9c.2-1.4.8-2.5 1.9-3.2l171.1-98.8-.5-180.2-200.3 115.8zm30.6-198.4c-2.5 0-3.8-1.2-3.8-3.8l-.3-109.3c0-1.2.6-2.3 1.9-3.2 92.5-53.5 139.2-80.3 139.9-80.3 2.5 0 3.8 1.2 3.8 3.8l.3 109.6c-.2 1.2-.8 2.1-1.9 2.7-92.8 53.6-139.4 80.5-139.9 80.5zm3.2-80 70.6-40.8v-30.9l-70.6 40.8zm.2 69.8 127.3-73.3-53.2-31.1-74.1 43zm131.1-79.8-.3-96.4-53.2 30.6v34.9z"
    const hi = ["H", 'i,']
    const intro = ['I', '\'m', ' ','Z', 'i', 'm','o', ' ','P', 'e', 'n', 'g']
    const desc = ['I\'', 'm',' ', 'a',' ', 'd', 'e', 'v', 'e', 'l','o', 'p', 'e', 'r', ' ','t', 'h', 'a','t', ' ','l', 'o','v', 'e', 's']
    return (
      <div className = "first">
        <div className = "intro-container">
            <div className = "description">
                <AnimateLetters letters = {hi} idx = {15} font_size = "clamp(16px, 4vw, 70px)" font_weight='bold'/>
                <AnimateLetters letters = {intro} idx = {15} font_size = "clamp(16px, 4vw, 70px)" font_weight='bold'/>
                <AnimateLetters letters = {desc} idx = {15} font_size = "clamp(16px, 3vw, 50px)" font_weight='normal'/>
                <div className='love'>
                    <TypeAnimation
                        sequence={['React.js', 1000, 'Next.js', 1000, 'Artificial Intelligence', 1000, 'Computer Vision', 1000,'Java', 1000, 'Python', 1000, 'Solving Problems', 1000, 'Creating', 1000]}
                        speed={50}
                        style = {{fontWeight: 'bold', color:"#325a9f"}}
                        repeat={Infinity}
                    />
                </div>
                <div className = "btn">
                    <Button style = {{fontSize: "clamp(0px, 2vw, 20px)", fontWeight:"bold", color:"#325a9f", borderRadius:"10px", border:"solid", width: "100%", maxWidth: "400px", marginTop:"70px"}}>
                        Contact Me!
                    </Button>
                </div>
            </div>
            <div className = "logo">
                <div className = "letterz">
                    <Logo path = {zpath} color = {"#325a9f"}/>
                </div>
                <div className = "letterp">
                    <Logo path = {ppath} color = {"#325a9f"}/>
                </div>
            </div>
        </div>
        
      </div>
    );
};

export default Introduction;