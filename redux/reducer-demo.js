const redux = require("redux");
console.log("reduce");

//reducer funkcija
const counterReducer = (state = { counter: 0 }, action) => {
  // console.log(state.counter)
  if (action.type === "INCR") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DECER") return { counter: state.counter - 1 };
};
return state;

//vienos tiesos saltinis
const store = redux.createStore(counterReducer);

//funkcija norinti gauti info esancia store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("sub executed:latestState ===", latestState);
};

//prisijungti counterSubscriber prie musu store
store.subscribe(counterSubscriber);

//vykduti veiksmus
store.dispatch({ type: "INCR" });
store.dispatch({ type: "INCR" });
