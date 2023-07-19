import React, {useState} from 'react'
import {AppBar, Toolbar, Typography, Stack, Button, Switch}from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'

function Navbar() {
    const [darkMode, setDarkMode] = useState(false)
    const darkTheme = createTheme({
        palette:{
            mode: darkMode ? 'light' : 'dark',
     },
    });
    
    return (
        
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <AppBar className='navbar' position='sticky' sx={{borderRadius:15, bgcolor:'success.main', }}  style={{ width: '90vw' }}>
                    <Toolbar>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>Me porto</Typography>
                        <Stack direction='row'>
                            <Button color='inherit' href='#about'>About</Button>
                            <Button color='inherit' href='#porto'>Porto</Button>
                            <Button color='inherit' href='https://drive.google.com/file/d/1D_nUvN3KAXa_KatZ7eVnDBnOq2aY5zWa/view?usp=sharing'>CV</Button>
                            {/* <main>
                                <Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)} />
                            </main>  */}
                        </Stack>
                </Toolbar>
            </AppBar>
                    
            </ThemeProvider>

    );
}

export default Navbar;
