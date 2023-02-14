import { createSlice } from "@reduxjs/toolkit";
import { clearAllKeys } from "./pressedKeysSlice";
import { addCurrentSpeed, clearCurrentScore } from "./scoreSlice";
import { reset as resetText } from "./textSlice";

export const countDownInitialState = {
    counter: 120,
    intervalId: -1,
    status: "not_started"
};

const countDownSlice = createSlice({
    name: "countDown",
    initialState: countDownInitialState,
    reducers: {
        count: (state, action) => {
            if(state.counter > 0)
                state.counter--;
        },
        setCountDownIntervalId: (state, action) => {
            state.intervalId = action.payload;
            state.status = "running";
        },
        clearCountDownInterval: (state, action) => {
            clearInterval(state.intervalId);
            state.intervalId = countDownInitialState.intervalId;
            state.status = "finished";
        },
        restartCountDown: (state, action) => {
            return countDownInitialState;
        }
    }
});

export const finishCountDownThunk = () => {
    return (dispatch) => {
        dispatch(clearCountDownInterval());
        dispatch(clearAllKeys());
        dispatch(addCurrentSpeed());
    }
}

export const retryThunk = () => {
    return (dispatch) => {
        dispatch(restartCountDown());
        dispatch(resetText());
        dispatch(clearAllKeys());
        dispatch(clearCurrentScore());
    }
}

export const selectCountDownIntervalId = (state) => state.countDown.intervalId;
export const selectCounter = (state) => state.countDown.counter;
export const selectStatus = (state) => state.countDown.status;
export const { count, setCountDownIntervalId, clearCountDownInterval, restartCountDown } = countDownSlice.actions;
export default countDownSlice.reducer;