import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const [open, setOpen] = useState(true);
    const [drawerWidth, setDrawerWidth] = useState(200);

    return (
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
    );
};

export default NavBar;
