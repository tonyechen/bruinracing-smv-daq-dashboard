import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import React from 'react';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Test from '../test/test';
import useTest from '../hooks/useTest';
import useLiveData from '../hooks/useLiveData';

let hasLiveData = false;
let stopLiveData;

const SideMenu = () => {
    // const [startTest, endTest] = useTest();
    const startLiveData = useLiveData();

    const toggleLiveData = async () => {
        if (!hasLiveData) {
            console.log('establishing connection to live data...');
            async function establishConnection() {
                stopLiveData = await startLiveData();
                hasLiveData = true;
            }
            await establishConnection();
        } else {
            console.log('disconnecting from live data...');
            stopLiveData();
            hasLiveData = false;
        }
    };

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={toggleLiveData}>
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
            {/* <ListItem disablePadding>
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
            </ListItem> */}
        </List>
    );
};

export default SideMenu;
