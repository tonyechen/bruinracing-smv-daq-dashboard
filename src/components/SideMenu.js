import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Test from '../test/test';
import useTest from '../hooks/useTest';

const SideMenu = () => {
    const [startTest, endTest] = useTest();

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PodcastsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Live" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <AnalyticsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Past Trials" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={startTest}>
                    <ListItemIcon>
                        <AnalyticsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Start Test" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={endTest}>
                    <ListItemIcon>
                        <AnalyticsIcon />
                    </ListItemIcon>
                    <ListItemText primary="End Test" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default SideMenu;
