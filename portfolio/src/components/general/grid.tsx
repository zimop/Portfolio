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
import reactnative from './../../images/icons/react-native-1.svg'
import sql from './../../images/icons/sql-file-format-svgrepo-com.svg'
import tailwind from './../../images/icons/tailwind-css-1.svg'
import tensorflow from './../../images/icons/tensorflow-2.svg'
import typescript from './../../images/icons/typescript.svg'
import python from './../../images/icons/python-5.svg'
import './../../styles/general/grid.css'
import { Typography } from '@mui/material';

const GridIcons: FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    return (
      <>
        <div className = "grid-container">
            <Grid container spacing={10} columns = {{sm: 4, md:4, lg:4}}>
                <Grid size={1}>
                    <img 
                        src = {aws}
                        onMouseEnter={() => setIsHovered(true)}>
                    </img>
                    {isHovered && (
                        <Typography>
                            AWS
                        </Typography>
                    )}
                </Grid>
                <Grid size={1}>
                    <img 
                        src = {c}
                        onMouseEnter={() => setIsHovered2(true)}>
                    </img>
                    {isHovered2 && (
                        <Typography>
                            c
                        </Typography>
                    )}
                </Grid>
                <Grid size={1}>
                    <img src = {github}></img>
                </Grid>
                <Grid size={1}>
                    <img src = {java}></img>
                </Grid>
                <Grid size={1}>
                    <img src = {javascript}></img>
                </Grid>
                <Grid size={1}>
                    <img src = {kotlin}></img>
                </Grid>
                <Grid size={1}>
                    <img src = {next}></img>
                </Grid>
                <Grid size={1}>
                    <img src = {react}></img>
                </Grid>
                <Grid size={1}>
                    <img src = {typescript}></img>
                </Grid>
                <Grid size={1}>
                    <img src = {sql}></img>
                </Grid>
                <Grid size={1}>
                    <img src = {tailwind}></img>
                </Grid>
                <Grid size={1}>
                    <img src = {python}></img>
                </Grid>
            </Grid>
        </div>
      </>
    );
};

export default GridIcons;