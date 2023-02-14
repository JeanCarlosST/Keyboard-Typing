import { createSlice } from "@reduxjs/toolkit";
import { finishCountDownThunk } from "./countDownSlice";

const initialState = {
    index: 0,
    target: "",
    portions: []
};

const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        setTargetText: (state, action) => {
            state.index = 0;
            state.target = action.payload;
            state.portions = [{
                text: action.payload,
                status: "uncompleted"
            }];
        },
        reset: (state, action) => {
            textSlice.caseReducers.setTargetText(
                state, 
                textSlice.actions.setTargetText(state.target));
        },
        addCharacter: (state, action) => {
            if(!action.payload)
                return state;
                
            const character = action.payload;
            const targetCharacter = state.target[state.index];
            const status = targetCharacter === character ? "correct" : "incorrect";
            const portionIndex = state.portions.length - 2;
            const lastPortion = state.portions[portionIndex];
            
            if(!lastPortion || lastPortion.status !== status) {
                const newPortion = {
                    text: character,
                    target: targetCharacter,
                    status: status
                };

                state.portions.splice(portionIndex + 1, 0, newPortion)
            }
            else {
                lastPortion.text += character;        
                lastPortion.target += targetCharacter; 
            }

            const uncompletedPortion = state.portions[state.portions.length - 1];
            uncompletedPortion.text = uncompletedPortion.text.slice(1);
            state.index++;
        },
        removeLastCharacter: (state, action) => {
            if(state.index <= 0)
                return state;
            
            const portionIndex = state.portions.length - 2;
            const lastPortion = state.portions[portionIndex];

            lastPortion.text = lastPortion.text.slice(0, lastPortion.text.length - 1);
            lastPortion.target = lastPortion.target.slice(0, lastPortion.target.length - 1);
            
            if(lastPortion.text.length === 0)
                state.portions.splice(portionIndex, 1);
            
            const uncompletedPortion = state.portions[state.portions.length - 1];
            const returnedCharacter = state.target[state.index - 1];
            uncompletedPortion.text = returnedCharacter + uncompletedPortion.text;

            state.index--;
        }
    }
});

export const addCharacterThunk = (payload) => {
    return (dispatch, getState) => {
        dispatch(addCharacter(payload));
        const isAllTextCorrect = selectIsAllTextCorrect(getState());
        
        if(isAllTextCorrect) {
            dispatch(finishCountDownThunk());
        }
    }
}

export const getNewRandomQuoteThunk = () => {
    return async (dispatch) => {
        const response = await fetch("https://api.quotable.io/random?minLength=200");

        if(response.ok) {
            const json = await response.json();
            dispatch(setTargetText(json.content));
        }
    }
}

export const selectTargetText = (state) => state.text.target;
export const selectPortions = (state) => state.text.portions;
export const selectCorrectCharacters = (state) => 
    state.text.portions
        .filter(p => p.status === "correct")
        .map(p => p.text)
        .join("")
        .length;
export const selectIsAllTextCorrect = (state) => {
    const lastPortion = state.text.portions[state.text.portions.length - 2];
    return state.text.portions.length === 2 && lastPortion?.text === state.text.target;
}
export const { setTargetText, reset, addCharacter, removeLastCharacter } = textSlice.actions;
export default textSlice.reducer;