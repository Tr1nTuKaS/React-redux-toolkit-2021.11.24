import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/store";

const Counter = () => {
  //issitraukiam is state tai ko mums reikia === counter
  const counter = useSelector((state) => state.counter.counter);
  const showC = useSelector((state) => state.counter.showCounter); // sukuria subscription automatiskai

  //veikimas is state vukdyti naudojam useDispatch()
  const dispatch = useDispatch();

  const incrementCounterHandler = () => {
    // dispatch({ type: "UP" });
    dispatch(counterActions.up());
  };
  const increaseCounterHandler = () => {
    // dispatch({ type: "UP_BY" });
  };
  const incCounterHandler = () => {
    // dispatch({ type: "UP_BY2", amount: 5 });
    dispatch(counterActions.increase(5));
  };
  const decrementCounterHandler = () => {
    // dispatch({ type: "DOWN" });
    dispatch(counterActions.down());
  };
  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE" });
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showC && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementCounterHandler}>Up</button>
        <button onClick={increaseCounterHandler}>Up7</button>
        <button onClick={incCounterHandler}>Up5</button>

        <button onClick={decrementCounterHandler}>Down</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
