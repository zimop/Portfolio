import React, { FC, useState} from 'react';
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import './../../styles/general/nav.css'
import menu from './../../images/icons/menu-bar.png'
import github from './../../images/icons/github.png'
import linkedin from './../../images/pictures/linked.png'
import { TypeAnimation } from 'react-type-animation';



const NavBar: FC = () => {
    return (
      <>
        <div style={{justifyContent:"space-between", display:"flex", padding: "20px"}} >
            <button className = "btn-container border">
                <img src = {menu} style={{height: "auto", width: "40px"}}></img>
            </button>
            <div>
                <button className = "icon pr-3">
                    <img src = {github} style={{height: "auto", width: "40px"}}></img>
                </button>
                <button className = "icon">
                    <img src = {linkedin} style={{height: "auto", width: "40px"}}></img>
                </button>
            </div>
        </div>
      </>
    );
};

export default NavBar;