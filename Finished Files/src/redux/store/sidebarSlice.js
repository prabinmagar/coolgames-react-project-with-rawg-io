import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarStatus: false
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    extraReducers: {},
    reducers: {
        setSidebarOn: (state) => {
            state.sidebarStatus = true;
        },

        setSidebarOff: (state) => {
            state.sidebarStatus = false;
        }
    }
});

export const { setSidebarOn, setSidebarOff } = sidebarSlice.actions;
export const selectSidebarStatus = (state) => state.sidebar.sidebarStatus;

export default sidebarSlice.reducer;

