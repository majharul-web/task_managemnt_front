import config from 'config';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
};

const customizationSlice = createSlice({
    name: 'customization',
    initialState,
    reducers: {
        menuOpen: (state, action) => {
            let id;
            id = action.payload.id;
            state.isOpen = [id];
        },
        setMenu: (state, action) => {
            state.opened = action.payload.opened;
        },
        setThemFontFamily: (state, action) => {
            state.fontFamily = action.payload.fontFamily;
        },
        setThemBorderRadius: (state, action) => {
            state.borderRadius = action.payload.borderRadius;
        }
    }
});

export const { setMenu, menuOpen, setThemFontFamily, setThemBorderRadius } = customizationSlice.actions;

export default customizationSlice.reducer;
