import { createSlice } from '@reduxjs/toolkit';

const trialData = createSlice({
    name: 'trialData',
    initialState: {
        data: {}
    },
    reducers: {
        updateTrialData(state, action) {
            state.data = {...action.payload};
        },
    },
});

export default trialData;
export const trialDataActions = trialData.actions;
