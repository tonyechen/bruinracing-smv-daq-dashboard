import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { sideMenuActions } from '../datastore/sideMenu';

const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <AppBar
            position="static"
            onClick={() => {
                dispatch(sideMenuActions.toggle());
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
