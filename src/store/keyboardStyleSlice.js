import { createSlice } from "@reduxjs/toolkit";
import { keyboardStyles } from "../data/keyboardStyles";

const keyboardStyleSlice = createSlice({
    name: "keyboardStyle",
    initialState: keyboardStyles[0],
    reducers: {
        changeStyle: (state, action) => action.payload
    }
});

export const selectStyle = (state) => state.keyboardStyle;
export const { changeStyle } = keyboardStyleSlice.actions;
export default keyboardStyleSlice.reducer;