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
import { Box, Button } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Graph = () => {
    // const [liveData, setLiveData] = useState([65, 59, 80, 81, 56, 55, 40]);

    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const data = {
        labels: labels,
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.2,
            },
        ],
    };

    const options = {
        responsive: true,
        aspectRatio: 1,
        interaction: {
            intersect: false,
        },
    };

    const chartRef = useRef(null);

    const addData = () => {
        const chart = chartRef.current;
        chart.data.labels.push(parseInt(Math.random() * 10));
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(Math.random() * 20 + 50);
        });
        chart.update();
    };
    return (
        <>
            <Line
                className='graph'
                ref={chartRef}
                data={data}
                options={options}
            ></Line>
            {/* <Button onClick={addData}>Add Data</Button> */}
        </>
    );
};

export default Graph;
