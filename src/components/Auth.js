import { useDispatch, useSelector } from 'react-redux';

import { login, logout } from './authSlice';

import classes from './Auth.module.scss';

export default function Auth(props) {
  const dispatch = useDispatch();

  const loginHandler = event => {
    event.preventDefault();

    dispatch(login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
}
