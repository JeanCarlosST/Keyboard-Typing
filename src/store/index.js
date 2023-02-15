import { configureStore } from "@reduxjs/toolkit";
import textReducer from './textSlice';
import capsLockReducer from './capsLockSlice';
import shiftReducer from './shiftSlice';
import pressedKeysReducer from './pressedKeysSlice';
import countDownReducer from './countDownSlice';
import scoreReducer from './scoreSlice';
import keyboardStyleReducer from './keyboardStyleSlice';

const store = configureStore({
    reducer: {
        text: textReducer,
        capsLock: capsLockReducer,
        shift: shiftReducer,
        pressedKeys: pressedKeysReducer,
        countDown: countDownReducer,
        score: scoreReducer,
        keyboardStyle: keyboardStyleReducer
    }
});

store.subscribe(() => {
    console.log(store.getState());
})

export default store;