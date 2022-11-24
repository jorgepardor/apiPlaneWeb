import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlanes = createAsyncThunk("planeState/fetchPlanes", async () => {
  return fetch("http://localhost:80/states").then((response) => response.json());
});


let getCurrentPlanes = createSlice({
  name: "planeState",
  initialState: {
    planeState: [],
    loading: false,
  },
  extraReducers: {
    [fetchPlanes.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPlanes.fullfilled]: (state, action) => {
      state.loading = false;
      state.planeState = action.payload;
    },
    [fetchPlanes.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});


export default getCurrentPlanes.reducer;