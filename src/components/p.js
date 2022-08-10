import React, {useState}from 'react'
import {AppBar, Toolbar, Typography, Stack, Button, Switch} from '@mui/material'
import{ThemeProvider, createTheme} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    const darkTheme = createTheme({
        palette:{
            mode: darkMode ? 'dark' : 'light',
        },
    });
    
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>bang</Typography>
                    <Stack direction='row'>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit'>Porto</Button>
                       <Switch control={<Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)} />} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>

    )
}

export default Navbar
