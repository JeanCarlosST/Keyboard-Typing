import { createSlice } from "@reduxjs/toolkit";
import { clearAllKeys } from "./pressedKeysSlice";

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

export const finishCountDownThunk = (payload) => {
    return (dispatch, getState) => {
        dispatch(countDownSlice.actions.clearCountDownInterval());
        dispatch(clearAllKeys());
    }
}

export const selectCountDownIntervalId = (state) => state.countDown.intervalId;
export const selectCounter = (state) => state.countDown.counter;
export const selectStatus = (state) => state.countDown.status;
export const { count, setCountDownIntervalId, clearCountDownIntervalId, restartCountDown } = countDownSlice.actions;
export default countDownSlice.reducer;