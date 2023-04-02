import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

// const units = {
//     RPM: 'rpm',
//     Speed: 'm/hr',
//     'Bus Voltage': 'Volt',
//     'Vehicle Current': 'Amp',
//     'Total kWh Usage': 'kWh',
//     'Current Power': 'Joules',
// };

const ParamCard = ({ onSelect, selectedParam, param, dataVal }) => {
    let styles = {
        minWidth: '150px',
        height: '150px',
        margin: 1,
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
        },
    };

    if (selectedParam == param) {
        styles['border'] = '2px solid green';
    }

    return (
        <Card key={param} sx={styles} onClick={onSelect}>
            <CardContent sx={{ paddingBottom: 0 }}>
                <Typography variant={'caption'}>{param}</Typography>
            </CardContent>
            <CardContent>
                <Typography variant={'h4'} align={'center'}>
                    {dataVal}
                    {/* <Typography variant={'caption'}>{units[param]}</Typography> */}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ParamCard;
