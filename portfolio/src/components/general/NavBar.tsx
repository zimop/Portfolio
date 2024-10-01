import React, { FC, useState} from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/general/nav.css'
import menu from './../../images/icons/menu-bar.png'
import github from './../../images/icons/github.png'
import linkedin from './../../images/pictures/linked.png'
import { TypeAnimation } from 'react-type-animation';



const NavBar: FC = () => {
    const github_link = "https://github.com/zimop?tab=repositories"
    const linkedin_link = "https://www.linkedin.com/in/zimo-peng-660272202/"

    return (
      <>
        <div style={{justifyContent:"space-between", display:"flex", padding: "20px"}} >
            <button className = "btn-container border">
                <img src = {menu} style={{height: "auto", width: "40px"}}></img>
            </button>
            <div>
                <a href = {github_link} target="_blank" rel="noopener noreferrer">
                    <button className = "icon pr-3">
                        <img src = {github} style={{height: "auto", width: "40px"}}></img>
                    </button>
                </a>
                <a href = {linkedin_link} target="_blank" rel="noopener noreferrer">
                    <button className = "icon">
                        <img src = {linkedin} style={{height: "auto", width: "40px"}}></img>
                    </button>
                </a>
            </div>
        </div>
      </>
    );
};

export default NavBar;