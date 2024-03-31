import {configureStore} from '@reduxjs/toolkit';
import newsReducer from '../feature/formSlice'
export const store = configureStore({
    reducer:newsReducer
})