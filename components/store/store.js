import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    // ten tab jest tylko po to aby mieć podgląd czy działa sortowanie
    {
      date: "2022-07-30",
      id: "zDf6pXK1CcCXjFfzuw4f",
      name: "1",
      price: "300",
    },
    {
      date: "2022-07-23",
      id: "zDf6poXK1CcCXjFfz44fY",
      name: "2",
      price: "26",
    },
    {
      date: "2022-07-20",
      id: "zDf6poX1CcCXjFfzu4f2Y",
      name: "3",
      price: "8",
    },
    {
      date: "2022-08-01",
      id: "zDf6poXK1CceCXjFfzuf2Y",
      name: "4",
      price: "15",
    },
    {
      date: "2022-07-15",
      id: "zDf6pXK1CcCXjdFfzu4f2Y",
      name: "5",
      price: "125",
    },
    {
      date: "2022-07-01",
      id: "zDf6poXKCcCXjFfzud4f2Y",
      name: "6",
      price: "415",
    },
  ],
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
