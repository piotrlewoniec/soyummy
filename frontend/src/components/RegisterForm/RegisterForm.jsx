import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import icons from '../../assets/icons/icons.svg';
import { register } from '../../redux/userAPI/actions';
import { useDispatch } from 'react-redux';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <div>
      <form
        className={styles.registerForm}
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <h2 className={styles.registerTitle}>Registration</h2>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-input-user`} />
            </svg>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Username"
            />
          </label>

          <label className={styles.label}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-input-envelope`} />
            </svg>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>

          <label className={styles.label}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-input-lock`} />
            </svg>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
        </div>
        <button className={styles.registerButton} type="submit">
          Sign up
        </button>
      </form>
      <Link to="/signin" className={styles.link}>
        Sign in
      </Link>
    </div>
  );
};
