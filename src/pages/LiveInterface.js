import { Box, Grid } from '@mui/material';
import React from 'react';
import Graph from '../components/Graph';
import Map from '../components/Map';

const LiveInterface = () => {
    return (
        <Grid container sx={{ width: '100%', height: '90%', overflow: 'auto' }}>
            <Grid item xs={12} md={12} sx={{ height: '30%' }}>
                <Box sx={{ height: '100%', width: '100%', display: 'flex' }}>
                    <Graph />
                    <Graph />
                    <Graph />
                    <Graph />
                </Box>
            </Grid>
            <Grid item xs={4} md={4} sx={{ height: '70%' }}>
                Trial Data?
            </Grid>
            <Grid item xs={8} md={8} sx={{ height: '70%' }}>
                {/* <Map /> */}
                Map
            </Grid>
        </Grid>
    );
};

export default LiveInterface;
