// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { counterSlice } from "./counterToolkit";
import { authSlice } from "./auth";

// const initState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initState,
//   reducers: {
//     up(state) {
//       state.counter++; // toollkit naudoja immer paketa tam kad nemutuotu o atnaujintu reiksmes taip kaip reikia reduceryje
//     },
//     down(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter += action.payload;
//     },
//     toggle(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initAuthState = { isAuthenticated: false };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const counterReducer = (state = initState, action) => {
//   // console.log(state,action)
//   switch (action.type) {
//     case "UP":
//       // state.counter++; // niekada nemutuoti state, visada grazinti pakeista kopija
//       // return state;
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case "UP_BY":
//       return {
//         ...state,
//         counter: state.counter + 7,
//       };
//     case "UP_BY2":
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       };
//     case "DOWN":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case "TOGGLE":
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

// console.log('store.js: counterSlice.actions ===', counterSlice.actions);
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
// const store = configureStore(counterSlice);

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
