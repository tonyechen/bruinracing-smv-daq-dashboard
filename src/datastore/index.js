import { configureStore } from '@reduxjs/toolkit';
import sideMenu from './sideMenu';
import trialData from './trialData';

const store = configureStore({
    reducer: {
        sideMenu: sideMenu.reducer,
        trialData: trialData.reducer,
    },
});

export default store;
