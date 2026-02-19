import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// TAMBAHKAN 'export' DI SINI
export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  return response.json();
});

const dataSlice = createSlice({
  name: 'posts',
  initialState: { items: [], status: 'idle' },
  reducers: {
    // TAMBAHKAN 'export' juga jika kamu memanggilnya di App.js
    addManual: (state, action) => {
      state.items.unshift({ id: Date.now(), title: action.payload });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      });
  }
});

// PASTIKAN BAGIAN INI JUGA ADA
export const { addManual } = dataSlice.actions; 
export const store = configureStore({
  reducer: {
    booking: dataSlice.reducer
  }
});