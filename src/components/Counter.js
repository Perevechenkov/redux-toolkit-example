import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.scss';

import { increment, decrement, incrementByAmount } from './counterSlice';

export default function Counter(props) {
  const counterValue = useSelector(state => state.counter.value);
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

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <button onClick={increaseCounterHandler}>Increase</button>
      <button onClick={decreaseCounterHandler}>Decrease</button>
      <button onClick={increaseByCounterHandler}>Increase By 5</button>
    </main>
  );
}
