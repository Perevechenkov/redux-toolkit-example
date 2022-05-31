import classes from './Header.module.scss';

export default function Header(props) {
  return (
    <header className={classes.header}>
      <h2>Redux Auth</h2>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
