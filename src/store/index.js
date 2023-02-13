import { configureStore } from "@reduxjs/toolkit";
import textReducer from './textSlice';
import capsLockReducer from './capsLockSlice';
import shiftReducer from './shiftSlice';
import pressedKeysReducer from './pressedKeysSlice';
import countDownReducer from './countDownSlice';

const store = configureStore({
    reducer: {
        text: textReducer,
        capsLock: capsLockReducer,
        shift: shiftReducer,
        pressedKeys: pressedKeysReducer,
        countDown: countDownReducer
    }
});

store.subscribe(() => {
    console.log(store.getState());
})

export default store;