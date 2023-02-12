import { createSlice } from "@reduxjs/toolkit";

const targetTextSlice = createSlice({
    name: "targetText",
    initialState: "",
    reducers: {
        setTargetText: (state, action) => {
            return action.payload;
        }
    }
});

export const selectTargetText = (state) => state.targetText;
export const { setTargetText } = targetTextSlice.actions;
export default targetTextSlice.reducer;