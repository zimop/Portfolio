import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/general/nav.css'
import menu from './../../images/icons/menu-bar.png'
import github from './../../images/icons/github.png'
import linkedin from './../../images/pictures/linked.png'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";


const Logo: FC = () => {
    return (
      <>
        <div>
            <motion.svg
                id="Layer_2"
                viewBox="0 0 512 512"
                width = "50vw"
                height = "auto"
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
                    stroke="blue" // Set the stroke color
                    strokeWidth="4" // Set the stroke width
                    initial={{ pathLength: 0 }} // Initial state (not drawn)
                    animate={{ pathLength: 1 }} // Final state (fully drawn)
                    transition={{ duration: 4, ease: "easeInOut" }}
                    id="_26"
                    d="m183.1 505.9h-1.1l-61.2-35.7c-1.2-.7-1.9-1.7-1.9-3l-.3-40 .3-.3v-.8l114.7-247.1-50.5 29h-1.9c0-.2-.1-.3-.3-.3l-.5-.3-60.7-35.2c-1.1-.7-1.6-1.8-1.6-3.2l-.3-40c.2-1.2.8-2.2 1.9-2.7 138.8-80.1 208.5-120.2 209.2-120.2s11.3 5.9 31.8 17.9 30.8 18 31 18.1l.5.5c0 .2.1.3.3.3l.5 1.3.3 20.7c0 13.8-.2 20.9-.5 21.2l-114.4 247.1c33.5-19.5 50.6-29.3 51.3-29.3s11.4 6 32 18l31.1 18.3.3.3c0 .2.1.3.3.3l.3.5.3 1.6.3 39.7c0 1.2-.6 2.2-1.9 3-138.9 80.2-208.6 120.3-209.3 120.3zm-4.6-307.8v-31.4l-53.2-30.9v31.2zm.8 297.8v-31.4l-53.2-30.9v31.4zm1.9-38.6 157.4-338.9-94 54.2-117.4 253.2zm.8-296.8 200-115.5-53.2-31.1-200 115.8zm51.9 268.3 149.3-85.9-53.4-31.1-56.7 32.8z"
                    />
                </motion.g>
            </motion.svg>
        </div>
      </>
    );
};

export default Logo;