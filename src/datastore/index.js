import { configureStore } from '@reduxjs/toolkit';
import sideMenu from './sideMenu';

const store = configureStore({
    reducer: {
        sideMenu: sideMenu.reducer,
    },
});

export default store;
