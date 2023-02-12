import { createSlice } from "@reduxjs/toolkit";


const pressedKeysSlice = createSlice({
    name: "pressedKeys",
    initialState: [],
    reducers: {
        addKey: (state, action) => {
            if(!state.includes(action.payload))
                state.push(action.payload);
        },
        removeKey: (state, action) => {
            return state.filter(key => key !== action.payload)
        }
    }
});

export const selectPressedKeys = (state) => state.pressedKeys;
export const { addKey, removeKey } = pressedKeysSlice.actions;
export default pressedKeysSlice.reducer;