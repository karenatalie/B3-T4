import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulasi API dengan Thunk
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  return await response.json();
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: { items: [], status: 'idle' },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      });
  }
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;