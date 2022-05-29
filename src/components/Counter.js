import classes from './Counter.module.scss';

export default function Counter(props) {
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>Value</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}