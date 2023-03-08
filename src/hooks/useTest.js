import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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

    const startTest = () => {
        if (!testRunning) {
            test.generateTest();
            setTestRunning(true);

            const id = setInterval(() => {
                const data = test.getData();
                dispatch(trialDataActions.updateTrialData(data));
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
