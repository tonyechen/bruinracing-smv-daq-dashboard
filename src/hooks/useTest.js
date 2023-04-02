import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLatestTrialTime, pushTrialData } from '../database/db';
import { trialDataActions } from '../datastore/trialData';
import Test from '../test/test';

const useTest = () => {
    // Testing only
    const [test, setTest] = useState(null);
    const [testRunning, setTestRunning] = useState(false);
    const [testID, setTestID] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const newTest = new Test([
            'RPM',
            'Speed',
            'Bus Voltage',
            'Vehicle Current',
            'Total kWh Usage',
            'Current Power',
        ]);
        setTest(newTest);
    }, []);

    const startTest = async () => {
        if (!testRunning) {
            test.generateTest();
            setTestRunning(true);

            /*  Test for directly sending data to the data store */
            // const id = setInterval(() => {
            //     const data = test.getData();
            //     dispatch(trialDataActions.updateTrialData(data));
            // }, 1000);

            /*  Test sending data to firebase */
            let latestTrialTime = await getLatestTrialTime();

            // latestTrialTime = '2023-4-1 12:31:24';
            console.log(latestTrialTime);

            const id = setInterval(async () => {
                const data = test.getData();
                const result = await pushTrialData(latestTrialTime, data);
            }, 1000);

            setTestID(id);
        }
    };

    const endTest = () => {
        test.endTest();
        setTestRunning(false);
        clearInterval(testID);
    };

    return [startTest, endTest];
};

export default useTest;
