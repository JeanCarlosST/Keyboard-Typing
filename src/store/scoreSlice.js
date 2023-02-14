import { createSlice } from "@reduxjs/toolkit";
import { countDownInitialState, selectCounter } from "./countDownSlice";
import { selectCorrectCharacters } from "./textSlice";

const initialState = {
    currentSpeed: 0,
    highScores: []
};

const scoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        clearCurrentScore: (state, action) => {
            state.currentSpeed = 0;
        },
        updateCurrentSpeed: (state, action) => {
            if(action.payload > 0)
                state.currentSpeed = action.payload;
        },
        addCurrentSpeed: (state, action) => {
            const currentSpeed = state.currentSpeed;
            
            if(currentSpeed <= 0 || state.highScores.some(score => currentSpeed === score))
                return state;

            const index = state.highScores.findIndex(score => score < currentSpeed);

            if(index === -1 && state.highScores.length > 0)
                state.highScores.push(currentSpeed);
            else
                state.highScores.splice(index, 0, currentSpeed);
        }
    }
});

export const updateCurrentSpeedThunk = () => {
    return (dispatch, getState) => {
        const state = getState();
        const counter = selectCounter(state);
        const matchedCharactersAmount = selectCorrectCharacters(state);

        let timePassed = countDownInitialState.counter - counter;

        if(timePassed === 0)
            timePassed = 1;

        timePassed /= 60;

        const speed = Math.floor(matchedCharactersAmount / timePassed);

        dispatch(updateCurrentSpeed(speed));
    }
}

export const selectHighScores = (state) => state.score.highScores;
export const selectCurrentSpeed = (state) => state.score.currentSpeed;
export const { clearCurrentScore, updateCurrentSpeed, addCurrentSpeed } = scoreSlice.actions;
export default scoreSlice.reducer;