import { createSlice } from "@reduxjs/toolkit";

const shiftSlice = createSlice({
    name: "shift",
    initialState: false,
    reducers: {
        activate: (state, action) => true,
        deactivate: (state, action) => false
    }
});

export const selectShift = (state) => state.shift;
export const { activate, deactivate } = shiftSlice.actions;
export default shiftSlice.reducer;