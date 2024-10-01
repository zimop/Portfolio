import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/general/nav.css'
import menu from './../../images/icons/menu-bar.png'
import github from './../../images/icons/github.png'
import linkedin from './../../images/pictures/linked.png'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

interface LogoProps {
    path: string;
    color: string;
}

const Logo: FC<LogoProps> = ({path, color}) => {
    return (
      <>
        <div>
            <motion.svg
                id="Layer_2"
                viewBox="0 0 512 512"
                width = "30vw"
                height = "auto"
                style = {{maxWidth:"700px", minWidth:"200px"}}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                xmlns="http://www.w3.org/2000/svg"
                >
                <motion.g
                    id="Icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.path
                    fill="none" // Make sure the path is not filled
                    stroke={color}// Set the stroke color
                    strokeWidth="4" // Set the stroke width
                    initial={{ pathLength: 0 }} // Initial state (not drawn)
                    animate={{ pathLength: 1 }} // Final state (fully drawn)
                    transition={{ duration: 7, ease: "easeInOut" }}
                    id="_26"
                    d = {path}
                    />
                </motion.g>
            </motion.svg>
        </div>
      </>
    );
};

export default Logo;