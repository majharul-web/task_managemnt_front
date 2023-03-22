// reducer import
import { combineReducers } from '@reduxjs/toolkit';
import customizationReducer from './customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer
});

export default reducer;
