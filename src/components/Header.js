import { useDispatch, useSelector } from 'react-redux';

import { login, logout } from './authSlice';

import classes from './Header.module.scss';

export default function Header(props) {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = event => {
    event.preventDefault();

    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <h2>Redux Auth</h2>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
