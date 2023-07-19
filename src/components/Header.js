import React,  { useState, useEffect }  from 'react'
import { Box, Stack, Grid, Card, CardContent, Typography} from '@mui/material';

import bg from './img/bg.JPEG';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {

    const [num, setNum] = useState(0);
  
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() 
                * (max - min + 1)) + min;
    };
  
    useEffect( () => {
        setNum(randomNumberInRange(1, 500));
    });

    return (
        <>
            <div id='header'>
                <Grid container className='header-card' justify = "center" alignItems="center" direction="column">
                    <Grid item xs={12}>
                    <Card sx={{maxWidth: 345 , typography: 'subtitle2', marginTop:20}}  >
                        <CardContent>
                        <Stack direction="row" spacing={2} justifyContent="flex-start" >                 
                            <Box className='boxname'><img src={bg} alt="" /></Box>
                            <Typography sx={{paddingTop:1}}>
                                Hi.Im_Rafi
                            </Typography>
                        </Stack>
                            <Typography variant="body2" color="text.secondary" align="left">
                                I am a front-end developer and sometimes a content creator.
                                Aiming to improve abilities for upcoming project
                            </Typography>                       
                        </CardContent>
                     
                     <Grid container spacing={4} >
                         <Grid item>
                            <Box sx={{marginLeft:'1rem',}}>
                                <Typography align="left" sx={{}}> 
                                    {num} Likes
                                </Typography>
                            </Box>
                         </Grid>
                        <Grid item>
                            <Stack direction='row' sx={{justifyContent:'right',marginLeft:'8rem',  spacing:2}}>
                                <Box><a href='https://www.instagram.com/ralfiantz/'><InstagramIcon className='icon' /></a></Box>
                                <Box><a href='https://github.com/rafi1919' ><GitHubIcon    className='icon' /></a></Box>
                                <Box><a href='https://www.linkedin.com/in/rafi-alifianto-818877245/'><LinkedInIcon  className='icon' /></a></Box>
                            </Stack>
                        </Grid>
                    </Grid>
                  
                    </Card>
                    <Typography sx={{paddingTop:1,marginLeft:'1rem', color: 'white' }} align="left"> 
                                via Portos
                    </Typography>
         
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Header
