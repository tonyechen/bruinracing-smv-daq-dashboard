import React, { useRef, useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Button, Card } from '@mui/material';
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const labels = [];

const data = {
    labels: labels,
    datasets: [
        {
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
        },
    ],
};

const options = {
    responsive: true,
    aspectRatio: 1,
    animation: false,
    interaction: {
        intersect: false,
    },
};

const Graph = () => {
    const liveData = useSelector((state) => state.trialData.data);

    const chartRef = useRef(null);

    useEffect(() => {
        if (liveData[0]) {
            addData();
        }
    }, [liveData]);

    function addData() {
        const chart = chartRef.current;
        const labels = Object.keys(liveData);
        chart.data.labels.push(labels[labels.length - 1]);
        if (chart.data.labels.length > 100) {
            chart.data.labels.shift();
        }
        chart.data.datasets.forEach((dataset) => {
            const data = Object.values(liveData);
            dataset.data.push(data[data.length - 1].Speed);

            if (dataset.data.length > 100) {
                dataset.data.shift(0);
            }
        });
        chart.update();
    }

    return (
        <Card sx={{ height: '100%', width: 'auto' }}>
            <Line
                className="graph"
                ref={chartRef}
                data={data}
                options={options}
            ></Line>
        </Card>
    );
};

export default Graph;
