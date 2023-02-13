import { createSlice } from "@reduxjs/toolkit";

export const countDownInitialState = {
    counter: 5,
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
            else {
                countDownSlice.caseReducers.clearCountDownIntervalId(state, action);
            }
        },
        setCountDownIntervalId: (state, action) => {
            state.intervalId = action.payload;
            state.status = "running";
        },
        clearCountDownIntervalId: (state, action) => {
            clearInterval(state.intervalId);
            state.intervalId = countDownInitialState.intervalId;
            state.status = "finished";
        }
    }
});

export const selectCountDownIntervalId = (state) => state.countDown.intervalId;
export const selectCounter = (state) => state.countDown.counter;
export const selectStatus = (state) => state.countDown.status;
export const { count, setCountDownIntervalId, clearCountDownIntervalId } = countDownSlice.actions;
export default countDownSlice.reducer;