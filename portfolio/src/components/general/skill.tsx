import React, { FC, useState} from 'react';
import aws from './../../images/icons/aws-2.svg'
import { motion } from "framer-motion"
import { Typography } from '@mui/material';
import './../../styles/general/skill.css'

interface SkillsProps{
  img: string
  description: string
}

const SkillIcon: FC<SkillsProps> = ({img, description}) => {
  const [isHovered, setIsHovered] = useState(false);
    return (
      <div className = "skill-container">
        {!isHovered && (
          <img 
          src = {img}
          style = {{width: "90px"}}
          onMouseEnter={() => setIsHovered(true)}
          />
        )}
        {isHovered && (
        <motion.img
          initial={{ opacity: 0, scale: 0.5, rotate: 0}}
          animate={{ opacity: 1, scale: 1, rotate: 360}}
          transition={{ duration: 0.5 }}
          src = {img}
          style = {{width: "90px"}}
          onMouseEnter={() => setIsHovered(true)}
        />
        )}
        <Typography
          style={{
            visibility: isHovered ? 'visible' : 'hidden', // Controls visibility
            opacity: isHovered ? 1 : 0, // Optional: Smooth transition
            transition: 'opacity 0.3s ease-in-out', // Smooth fade-in effect
            fontWeight: "bold",
            fontSize:"20px",
            }}
          className = "name"
        >
          {description}
        </Typography>
      </div>
    );
};

export default SkillIcon;