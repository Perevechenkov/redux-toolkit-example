import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.scss';

import {
  increment,
  decrement,
  incrementByAmount,
  toggleCounter,
} from '../store/counterSlice';

export default function Counter(props) {
  const counterValue = useSelector(state => state.counter.value);
  const counterIsShown = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const increaseCounterHandler = () => {
    dispatch(increment());
  };

  const decreaseCounterHandler = () => {
    dispatch(decrement());
  };

  const increaseByCounterHandler = () => {
    dispatch(incrementByAmount(5));
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterIsShown && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={increaseCounterHandler}>Increase</button>
        <button onClick={decreaseCounterHandler}>Decrease</button>
        <button onClick={increaseByCounterHandler}>Increase By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}
