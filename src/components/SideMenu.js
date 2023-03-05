import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const SideMenu = () => {
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
        </List>
    );
};

export default SideMenu;
