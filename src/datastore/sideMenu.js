import { createSlice } from '@reduxjs/toolkit';

const sideMenu = createSlice({
    name: 'sideMenu',
    initialState: { isOpen: true },
    reducers: {
        toggle(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export default sideMenu;

export const sideMenuActions = sideMenu.actions;
