import React from 'react'
import {Grid, Box,  Typography} from '@mui/material'

import porto1 from './img/porto1.png';
import porto3 from './img/porto3.png';
import porto2 from './img/porto2.png';

const Porto = () => {
    return (
        <>
             <div id='porto'>
             <Grid item>           
                    <Box className="profile" style={{ backgroundColor: "#101010" }} >
                        <Typography variant="h4" color="common.white">
                            My Work
                        </Typography>
                    </Box>
                </Grid>
                <Grid container p={5} spacing={3} sx={{pt:7}}>                    
                    <Grid md={4} xs={12} item className='portopng'>
                        <a href='https://github.com/rafi1919/warung_cell' ><img src={porto2} alt=' ' /></a>
                        <p>Warung Cell</p>
                    </Grid>
                    <Grid item md={4} xs={12} className='portopng'>
                       <a href='https://vue-mekaverse-mg89.vercel.app/'> <img src={porto1} alt=' ' /> </a>
                       <p>Mekaverse NFT</p>
                    </Grid>
                     <Grid item md={4} xs={12} className='portopng'>
                       <a href='https://vue-preets.vercel.app/'> <img src={porto3} alt=' ' /> </a>
                       <p>Preets story app generator</p>
                    </Grid>
                    
                </Grid>
            </div>
        </>
    )
}

export default Porto
