import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/general/nav.css'
import menu from './../../images/icons/burger-bar.png'
import github from './../../images/icons/github.png'
import linkedin from './../../images/icons/linkedin.png'
import { TypeAnimation } from 'react-type-animation';



const NavBar: FC = () => {
    return (
      <>
        <div style={{margin: "20px", justifyContent:"space-between", display:"flex"}} >
            <button className = "btn-container">
                <img src = {menu} style={{height: "auto", width: "30px"}}></img>
            </button>
            <div>
                <button className = "btn-container">
                    <img src = {github} style={{height: "auto", width: "30px"}}></img>
                </button>
                <button className = "btn-container">
                    <img src = {linkedin} style={{height: "auto", width: "30px"}}></img>
                </button>
            </div>
        </div>
      </>
    );
};

export default NavBar;