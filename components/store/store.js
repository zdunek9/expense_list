import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items.filter((item) => item.id === action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export default store;
