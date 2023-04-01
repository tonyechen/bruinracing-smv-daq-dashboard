import { Box, Card, CardContent, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Graph from '../components/Graph';
import Map from '../components/Map';
import ParamCard from '../components/ParamCard';

const LiveInterface = () => {
    const latest_data = useSelector((state) => state.trialData.latest_data);

    const [selectedParam, setSelectedParam] = useState('');

    return (
        <Grid
            container
            sx={{ width: '100%', height: '100%', overflow: 'auto' }}
        >
            <Grid item xs={12} md={12} sx={{ height: '30%' }}>
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flex: 'flex-wrap',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    {Object.keys(latest_data).map((parameter) => {
                        if (parameter !== 'latitude' && parameter !== 'longtitude')
                            return (
                                <ParamCard
                                    onSelect={() => {
                                        setSelectedParam(parameter);
                                    }}
                                    selectedParam={selectedParam}
                                    param={parameter}
                                    dataVal={latest_data[parameter]}
                                />
                            );
                    })}
                </Box>
            </Grid>
            <Grid item xs={4} md={4} sx={{ height: '70%' }}>
                <Graph dataType={selectedParam} />
            </Grid>
            <Grid item xs={8} md={8} sx={{ height: '70%' }}>
                <Map dataType={selectedParam}/>
            </Grid>
        </Grid>
    );
};

export default LiveInterface;
