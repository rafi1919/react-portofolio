import React from 'react'
import {Box, Grid, Card, CardContent, Typography} from '@mui/material'


const About = () => {
    return (
        <>
            <div id='about'>
                
                <Grid item>
                    <Box className="about"  sx={{py:7}}>
                        <Typography variant="h4" color="common.white">
                            My Services
                        </Typography>
                    </Box>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }} spacing={4}>
                    <Grid item> 
                        <Card sx={{ maxWidth: 200 ,bgcolor:'#1F1F1F', borderRadius:5}}>
                            <CardContent>
                            <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13.2942 7.17041L12.0001 12L10.706 16.8297" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                            <Typography variant="body2" sx={{color:'#b3b3b3'}}>
                                website Programming
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 200 ,bgcolor:'#1F1F1F', borderRadius:5}}>
                            <CardContent>
                            <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#b3b3b3" stroke-width="1.5"></path> <path d="M17 2.5L17 21.5" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 2.5L7 21.5" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 12L7 12M22 12L17 12" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2.5 7L7 7M21.5 7L17 7" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2.5 17L7 17M21.5 17L17 17" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 12C14 11.4722 13.4704 11.1162 12.4112 10.4043C11.3375 9.68271 10.8006 9.3219 10.4003 9.58682C10 9.85174 10 10.5678 10 12C10 13.4322 10 14.1483 10.4003 14.4132C10.8006 14.6781 11.3375 14.3173 12.4112 13.5957C13.4704 12.8838 14 12.5278 14 12Z" stroke="#b3b3b3" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                            <Typography variant="body2" sx={{color:'#b3b3b3'}}>
                                Video editting
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            
        </>
    )
}

export default About
