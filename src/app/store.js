import { configureStore } from '@reduxjs/toolkit';
import customizationSlice from 'features/customization/customizationSlice';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        customization: customizationSlice
    }
});

const persister = 'Free';

export { store, persister };
