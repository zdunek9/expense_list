import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    // ten tab jest tylko po to aby mieć podgląd czy działa sortowanie
    {
      date: "2022-07-30",
      id: "zDf6pXK1CcCXjFfzuw4f",
      name: "Soup",
      price: "12",
    },
    {
      date: "2022-07-23",
      id: "zDf6poXK1CcCXjFfz44fY",
      name: "Car repair",
      price: "600",
    },
    {
      date: "2022-07-20",
      id: "zDf6poX1CcCXjFfzu4f2Y",
      name: "Shopping",
      price: "86",
    },
    {
      date: "2022-08-01",
      id: "zDf6poXK1CceCXjFfzuf2Y",
      name: "Cat food",
      price: "64.55",
    },
    {
      date: "2022-07-15",
      id: "zDf6pXK1CcCXjdFfzu4f2Y",
      name: "Dinner",
      price: "124.99",
    },
    {
      date: "2022-07-01",
      id: "zDf6poXKCcCXjFfzud4f2Y",
      name: "Phone subscription",
      price: "50",
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
