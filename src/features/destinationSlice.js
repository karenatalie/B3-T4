import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* ===========================
   THUNK
=========================== */
export const fetchDestinations = createAsyncThunk(
  "destinations/fetchByContinent",
  async (continentId) => {
    // Simulasi API call
    const dataByContinent = {
      asia: [
        {
          id: 1,
          name: "Indonesia",
          image: "/foto/indonesia.jpeg",
          price: "Mulai dari Rp 850.000",
        },
        {
          id: 2,
          name: "Thailand",
          image: "/foto/indonesia.jpeg",
          price: "Mulai dari Rp 1.200.000",
        },
      ],
      europe: [
        {
          id: 3,
          name: "France",
          image: "/foto/indonesia.jpeg",
          price: "Mulai dari Rp 6.500.000",
        },
        {
          id: 4,
          name: "Italy",
          image: "/foto/indonesia.jpeg",
          price: "Mulai dari Rp 7.200.000",
        },
      ],
      africa: [
        {
          id: 5,
          name: "USA",
          image: "/foto/indonesia.jpeg",
          price: "Mulai dari Rp 9.500.000",
        },
        {
          id: 6,
          name: "Brazil",
          image: "/foto/indonesia.jpeg",
          price: "Mulai dari Rp 8.800.000",
        },
      ],
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataByContinent[continentId] || []);
      }, 1000);
    });
  }
);

/* ===========================
   SLICE
=========================== */
const destinationSlice = createSlice({
  name: "destinations",
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default destinationSlice.reducer;