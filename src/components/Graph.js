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
import { getAllTrials } from '../database/db';

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

// how many data points are displayed on the graph
const data_length = 100;

const Graph = ({ dataType }) => {
    const liveData = useSelector((state) => state.trialData.data);

    const chartRef = useRef(null);

    // getAllTrials();

    useEffect(() => {
        if (liveData) {
            addData();
        }
    }, [liveData, dataType]);

    function addData() {
        const chart = chartRef.current;

        const labels = Object.keys(liveData);
        const num_labels = labels.length;
        if (num_labels > data_length) {
            chart.data.labels = labels.slice(
                num_labels - data_length,
                num_labels - 1
            );
        } else {
            chart.data.labels = labels;
        }

        chart.data.datasets.forEach((dataset) => {
            const all_data = Object.values(liveData);
            const data_values = [];
            all_data.map((data) => {
                data_values.push(data[dataType]);
            });

            const num_data_values = data_values.length;

            if (num_data_values > data_length) {
                dataset.data = data_values.slice(
                    num_labels - data_length,
                    num_labels - 1
                );
            } else {
                dataset.data = data_values;
            }

            dataset.label = dataType;
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
