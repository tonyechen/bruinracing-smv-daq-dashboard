import { listItemAvatarClasses } from '@mui/material';
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import database, { getLatestTrialTime } from '../database/db';
import { trialDataActions } from '../datastore/trialData';

const useLiveData = () => {
    const dispatch = useDispatch();

    // establish connection to live data
    async function startLiveData() {
        const latestTrialTime = await getLatestTrialTime();
        console.log(latestTrialTime);

        const unsubscribe = onValue(
            ref(database, latestTrialTime),
            (snapshot) => {
                // console.log(snapshot.val());
                dispatch(trialDataActions.updateTrialData(snapshot.val()));
            }
        );

        return unsubscribe;
    }

    return startLiveData;
};

export default useLiveData;
