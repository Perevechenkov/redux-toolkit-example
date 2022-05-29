import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.scss';

import { increment, decrement } from './counterSlice';

export default function Counter(props) {
  const counterValue = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const increaseCounterHandler = () => {
    dispatch(increment());
  };
  const decreaseCounterHandler = () => {
    dispatch(decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <button onClick={increaseCounterHandler}>Increase</button>
      <button onClick={decreaseCounterHandler}>Decrease</button>
    </main>
  );
}
