import { createSlice } from "@reduxjs/toolkit";

const initState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    up(state) {
      state.counter++; // toollkit naudoja immer paketa tam kad nemutuotu o atnaujintu reiksmes taip kaip reikia reduceryje
    },
    down(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
