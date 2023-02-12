import { createSlice } from "@reduxjs/toolkit";

const capsLockSlice = createSlice({
    name: "capsLock",
    initialState: false,
    reducers: {
        toggle: (state, action) => !state
    }
});

export const selectCapsLock = (state) => state.capsLock;
export const { toggle } = capsLockSlice.actions;
export default capsLockSlice.reducer;