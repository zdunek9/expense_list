import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    // ten tab jest tylko po to aby mieć podgląd czy działa sortowanie
    {
      date: "2022-07-30",
      id: "zDf6pXK1CcCXjFfzuw4f",
      name: "Gas",
      price: "12",
      cat: 1,
    },
    {
      date: "2022-07-23",
      id: "zDf6poXK1CcCXjFfz44fY",
      name: "Cat food",
      price: "60",
      cat: 2,
    },
    {
      date: "2022-07-20",
      id: "zDf61poX1CcCXjFfzu4f2Y",
      name: "Bus ticket",
      price: "2.5",
      cat: 3,
    },
    {
      date: "2022-08-01",
      id: "zDf6poXK1CceCXjFfzuf2Y",
      name: "Gym",
      price: "120",
      cat: 4,
    },
    {
      date: "2022-07-15",
      id: "zDf6pXK1CcCXjdFfzu4f2Y",
      name: "Dinner",
      price: "124.99",
      cat: 5,
    },
    {
      date: "2022-07-01",
      id: "zDf6poXKCcCXjFfzud4f2Y",
      name: "Game pass",
      price: "16.99",
      cat: 6,
    },
    {
      date: "2022-08-07",
      id: "zDf6poXKCacCXjFfzud45f2Y",
      name: "Drugs",
      price: "10.20",
      cat: 7,
    },
    {
      date: "2022-07-29",
      id: "zDaf6poaXKCcCXjFfzud4f2Y",
      name: "New t-shirt",
      price: "50",
      cat: 8,
    },
    {
      date: "2022-05-15",
      id: "zDf6poXKCcCaXjFfzud4f2Y",
      name: "Lawn mower repair",
      price: "310",
      cat: 9,
    },
    {
      date: "2022-05-15",
      id: "zDf6paoXKCcaCXjzud4f2Y",
      name: "French lesson for june",
      price: "610",
      cat: 10,
    },
    {
      date: "2022-08-02",
      id: "zDfaas6poXKCcCXjFfzu4f2Y",
      name: "Wine",
      price: "12.59",
      cat: 11,
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
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeName(state, action) {
      const item = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[item].name = action.payload.name;
    },
    changePrice(state, action) {
      const item = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[item].price = action.payload.price;
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
