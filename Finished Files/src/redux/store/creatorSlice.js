import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncCreators } from "../utils/creatorUtils";

const initialState = {
    creators: [],
    creatorsStatus: STATUS.IDLE
}

const creatorSlice = createSlice({
    name: "creator",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncCreators.pending, (state) => {
            state.creatorsStatus = STATUS.LOADING
        })

        builder.addCase(fetchAsyncCreators.fulfilled, (state, action) => {
            state.creators = action.payload;
            state.creatorsStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncCreators.rejected, (state) => {
            state.creatorsStatus = STATUS.FAILED;
        })
    },
    reducers: {}
});

export const selectAllCreators = (state) => state.creator.creators.results;
export const selectAllCreatorsStatus = (state) => state.creator.creatorsStatus;
export const selectCreatorsNextPage = (state) => state.creator.creators.next;
export const selectCreatorsPrevPage = (state) => state.creator.creators.previous;

export default creatorSlice.reducer;