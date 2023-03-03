import logo from './logo.svg';
import './styles/App.css';
import {
    AppBar,
    Box,
    Grid,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import LiveInterface from './pages/LiveInterface';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import SideMenu from './components/SideMenu';
import NavBar from './components/NavBar';

function App() {
    return (
        <Box className="App" spacing={2}>
            <NavBar />

            <Grid container sx={{ height: '90%' }}>
                <Grid item maxWidth={200} xs={3}>
                    <SideMenu />
                </Grid>

                <Grid item xs={9}>
                    <LiveInterface />
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
