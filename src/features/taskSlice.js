import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// THUNK: Proses ambil data dari API (Asynchronous)
export const fetchDestinations = createAsyncThunk(
    "destinations/fetchDestinations",
    async () => {
        const response = await fetch(
            "https://my-json-server.typicode.com/eternalpeach/dummy-destination/destination"
        );
        return await response.json();
    }
);

const taskSlice = createSlice({
    name: "task",
    initialState: { 
        items: [], 
        status: "idle" // idle | loading | succeeded | failed
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDestinations.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchDestinations.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload; // Data dari API masuk ke state.task.items
            })
            .addCase(fetchDestinations.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default taskSlice.reducer;