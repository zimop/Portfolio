import Grid from '@mui/material/Grid2';
import React, { FC, useState} from 'react';
import aws from './../../images/icons/aws-2.svg'
import c from './../../images/icons/c.svg'
import github from './../../images/icons/github.png'
import java from './../../images/icons/java-svgrepo-com.svg'
import javascript from './../../images/icons/javascript-1.svg'
import kotlin from './../../images/icons/kotlin-2.svg'
import next from './../../images/icons/nextjs-svgrepo-com.svg'
import react from './../../images/icons/react-brands-solid(1).svg'
import sql from './../../images/icons/sql-file-format-svgrepo-com.svg'
import tailwind from './../../images/icons/tailwind-css-1.svg'
import typescript from './../../images/icons/typescript.svg'
import python from './../../images/icons/python-5.svg'
import './../../styles/general/grid.css'
import SkillIcon from './skill';

interface Image {
    img: string;
    desc: string;
  }

const images: Image[] = [
    { img: github, desc: 'GitHub'},
    { img: c, desc: 'C++' },
    { img: aws, desc: 'AWS' },
    { img: java, desc: 'Java' },
    { img: javascript, desc: 'JavaScript' },
    { img: kotlin, desc: 'Kotlin' },
    { img: next, desc: 'Next.js' },
    { img: react, desc: 'React' },
    { img: typescript, desc: 'TypeScript' },
    { img: sql, desc: 'SQL' },
    { img: tailwind, desc: 'Tailwind' },
    { img: python, desc: 'Python' }
  ];

const GridIcons: FC = () => {
    return (
      <>
        <div className = "grid-container">
            <Grid container spacing={4} columns = {{xs:1, sm: 2, md:2, lg:3}} className = "grid-item">
                {images.map((image: Image, index: number) => (
                    <Grid key={index} size={1}>
                        <SkillIcon img = {image.img} description={image.desc}></SkillIcon>
                    </Grid>
                ))}
            </Grid>
        </div>
      </>
    );
};

export default GridIcons;