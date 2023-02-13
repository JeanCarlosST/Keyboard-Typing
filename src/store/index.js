import { configureStore } from "@reduxjs/toolkit";
import textReducer from './textSlice';
import capsLockReducer from './capsLockSlice';
import shiftReducer from './shiftSlice';
import pressedKeysReducer from './pressedKeysSlice';

const store = configureStore({
    reducer: {
        text: textReducer,
        capsLock: capsLockReducer,
        shift: shiftReducer,
        pressedKeys: pressedKeysReducer
    }
});

store.subscribe(() => {
    console.log(store.getState());
})

export default store;