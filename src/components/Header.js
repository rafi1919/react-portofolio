import React from 'react'
import {Typography, Grid, Box, Stack} from '@mui/material';

import bg from './img/bg.JPG';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
    const commonStyles = {
        m: 1,
        border: 1,
        margin: '2rem',
        display: 'block', 
        justifyContent: 'center',
      };

    return (
        <>
            <div id='header'>
                <Box className='boxname'><img src={bg} /></Box>
                <Box className='myname' sx={{ ...commonStyles, borderColor: 'error.main', typography: 'h6' }}>Hi, I'm Rafi</Box>
                <Box>Front end Developer</Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} sx={{justifyContent:'center', margin:'2rem'}}>
                    <Box><a href='https://www.instagram.com/ralfiantz/'><InstagramIcon className='icon' /></a></Box>
                    <Box><a href='https://github.com/rafi1919' ><GitHubIcon    className='icon' /></a></Box>
                    <Box><a href='https://www.linkedin.com/in/rafi-alifianto-818877245/'><LinkedInIcon  className='icon' /></a></Box>
                </Stack>
            </div>
        </>
    )
}

export default Header
