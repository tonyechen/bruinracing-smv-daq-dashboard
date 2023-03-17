import { createSlice } from '@reduxjs/toolkit';

const trialData = createSlice({
    name: 'trialData',
    initialState: {
        data: {},
        latest_trial: '',
        latest_data: {},
    },
    reducers: {
        // take data in the form a single trial object
        updateTrialData(state, action) {
            state.data = { ...action.payload };

            const times = Object.keys(action.payload);

            const latest_time = times[times.length - 1];
            state.latest_data = action.payload[latest_time];
        },
        updateLatestTrial(state, action) {
            state.latest_trial = action.payload;
        },
    },
});

export default trialData;
export const trialDataActions = trialData.actions;
