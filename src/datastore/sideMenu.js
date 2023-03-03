import { createSlice } from '@reduxjs/toolkit';

export default sideMenu = createSlice({
    name: 'sideMenu',
    initialState: { isOpen: true },
    reducer: {
        toggle(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const sideMenuActions = toggleSideMenu.actions;
