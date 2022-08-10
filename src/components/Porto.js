import React from 'react'
import {Grid, Box, Typography, Divider} from '@mui/material'

import porto1 from './img/porto1.png';
import porto2 from './img/porto2.png';
import porto3 from './img/porto3.png';
import porto4 from './img/porto4.png';

const Porto = () => {
    return (
        <>
             <div id='porto'>
             <Grid item>
                    <Box className='profile' sx={{typography:'h4'}}>
                        <Divider orientation="horizontal" variant="middle" sx={{ color: 'error.main' }}>
                            My Work
                        </Divider>
                    </Box>
                </Grid>
                <Grid container p={5} spacing={2}>                    
                    <Grid item md={6} className='portopng'>
                       <a href='https://makrab.herokuapp.com/'> <img src={porto1} /> </a>
                       <p>Website Makrab D3MI02</p>
                    </Grid>
                    <Grid md={6} item className='portopng'>
                        <a href='https://webwarung.000webhostapp.com/' ><img src={porto2} /></a>
                        <p>Website Data Warung Cell</p>
                    </Grid>
                    <Grid md={6} item className='portopng'>
                        <a href='https://rafi1919.github.io/rocket-coffee/' ><img src={porto3} /></a>
                        <p>Website rocket coffee</p>
                    </Grid>
                    <Grid md={6} item className='portopng'>
                        <a href='https://gundam-barbatos-landing.vercel.app/' ><img src={porto4} /></a>
                        <p>Website Gundam Barbatos</p>
                    </Grid>
                
                </Grid>
            </div>
        </>
    )
}

export default Porto
