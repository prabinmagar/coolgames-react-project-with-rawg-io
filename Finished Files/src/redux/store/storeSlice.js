import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncStores, fetchAsyncStoresDetails } from "../utils/storeUtils";

const initialState = {
   stores: [],
   storesStatus: STATUS.IDLE,
   storesSingle: [],
   storesSingleStatus: STATUS.IDLE 
}

const storeSlice = createSlice({
    name: "store",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncStores.pending, (state) => {
            state.storesStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncStores.fulfilled, (state, action) => {
            state.stores = action.payload;
            state.storesStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncStores.rejected, (state) => {
            state.storesStatus = STATUS.FAILED;
        })

        builder.addCase(fetchAsyncStoresDetails.pending, (state) => {
            state.storesSingleStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncStoresDetails.fulfilled, (state, action) => {
            state.storesSingle = action.payload;
            state.storesSingleStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncStoresDetails.rejected, (state) => {
            state.storesSingleStatus = STATUS.FAILED;
        })
    },
    reducers: {}
});

export const selectAllStores = (state) => state.store.stores.results;
export const selectAllStoresStatus = (state) => state.store.storesStatus;
export const selectSingleStore = (state) => state.store.storesSingle;
export const selectSingleStoreStatus = (state) => state.store.storesSingleStatus;

export default storeSlice.reducer;