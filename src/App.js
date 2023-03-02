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
import LiveInterface from './components/LiveInterface';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import SideMenu from './components/SideMenu';

function App() {
    const [open, setOpen] = useState(true);
    const [drawerWidth, setDrawerWidth] = useState(200);
    return (
        <Box className="App" spacing={2}>
            <AppBar
                position="static"
                onClick={() => {
                    setOpen(!open);
                    setDrawerWidth(200);
                }}
            >
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" color="inherit" component="div">
                        SMV EV Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container sx={{ height: '90%' }}>
                {open || (
                    <Grid item maxWidth={200} xs={3}>
                        <SideMenu />
                    </Grid>
                )}

                <Grid item xs={9}>
                    <LiveInterface />
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
