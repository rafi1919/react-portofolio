import React from 'react'
import {Box, Grid, Typography, Divider,Stack, Button} from '@mui/material'
import bg2 from './img/bg2.JPG';


const About = () => {
    return (
        <>
            <div id='about'>
                <Grid item>
                    <Box className='profile' sx={{typography:'h4'}}>
                        <Divider orientation="horizontal" variant="middle" sx={{ color: 'error.main' }}>
                            Profile
                        </Divider>
                    </Box>
                </Grid>
                <Grid container p={{xs: 1, sm: 2, md:4}} spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ textAlign: 'center' }}>
                    <Grid item md={6} className='resume'>
                        <Box className='text' sx={{ m: 2 }}>
                            Result-oriented developer with proven analytical creative thinking and critical thinking skills. Aiming to leverage my abillities to successfully fill the Front-end Developer role in your company. Friquently praised as detail-oriented by my peers, i can be relied upon to help your company achieve its goals. 
                        </Box>
                        <Box className='profile' sx={{typography:'h4'}}>
                            <Divider orientation="horizontal" variant="inset" text-align="left" sx={{ color: 'error.main' }}>
                                Skills
                            </Divider>
                        <Box className='skills' sx={{ m: 2 }}></Box>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
                                <Button variant="contained" color="error" size='small'>HTML</Button>
                                <Button variant="contained" color="error" >SCSS</Button>
                                <Button variant="contained" color="error" >Bootstrap</Button>
                                <Button variant="contained" color="error" >JS</Button>
                                <Button variant="contained" color="error" >React</Button>
                                <Button variant="contained" color="error" >Figma UI</Button>
                            </Stack>
                        </Box>
                    </Grid>  
                    <Grid item md={6} className='resume'>
                            <Box><img src={bg2} /></Box>
                    </Grid>    
                </Grid>
            </div>
            
        </>
    )
}

export default About
