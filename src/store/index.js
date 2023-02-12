import { configureStore } from "@reduxjs/toolkit";
import targetTextReducer from './targetTextSlice';
import capsLockReducer from './capsLockSlice';
import shiftReducer from './shiftSlice';
import pressedKeysReducer from './pressedKeysSlice';

const store = configureStore({
    reducer: {
        targetText: targetTextReducer,
        capsLock: capsLockReducer,
        shift: shiftReducer,
        pressedKeys: pressedKeysReducer
    }
});

export default store;