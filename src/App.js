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
import { useState } from 'react';
import SideMenu from './components/SideMenu';
import NavBar from './components/NavBar';
import { useSelector } from 'react-redux';

function App() {
    const isOpen = useSelector((state) => state.sideMenu.isOpen);

    return (
        <Box className="App" spacing={2}>
            <NavBar />

            <Grid container sx={{ height: '90%' }} spacing={2}>
                {isOpen && (
                    <Grid item xs={2}>
                        <SideMenu />
                    </Grid>
                )}

                <Grid item xs={10}>
                    <LiveInterface />
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
