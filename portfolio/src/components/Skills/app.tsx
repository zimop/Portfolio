import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/Skills/styles.css'
import Marquee from "react-fast-marquee";
import GridIcons from '../general/grid';
import SkillIcon from '../general/skill';



const Skills: FC = () => {
    return (
      <>
        <div className = "all">
          <div className = "">
            <h1>
              Skills
            </h1>
          </div>
          <GridIcons/>
        </div>
      </>
    );
};

export default Skills;