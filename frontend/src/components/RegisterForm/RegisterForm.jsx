import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import icons from '../../assets/icons/icons.svg';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/userAPI/actions';
import Notiflix from 'notiflix';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistrationSuccess = () => {
    navigate('/signin');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const regexEmailPattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const regexEmail = new RegExp(regexEmailPattern);
    const regexPwdPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.name) {
      Notiflix.Notify.failure('Please enter a username.');
      return;
    }

    if (!formData.email || !regexEmail.test(formData.email)) {
      Notiflix.Notify.failure('Please enter a valid email address.');
      return;
    }

    if (!formData.password || !regexPwdPattern.test(formData.password)) {
      Notiflix.Notify.failure('Please enter a valid password.');
      return;
    }

    dispatch(registerUser(formData))
      .then(response => {
        if (response.payload.isEmailVerified) {
          handleRegistrationSuccess();
          Notiflix.Notify.success('Registration successful');
        } else {
          Notiflix.Notify.failure('Registration failed. Please try again.');
        }
      })
      .catch(error => {
        if (error.message === 'User already exists') {
          Notiflix.Notify.failure(
            'User with this name or email already exists'
          );
        } else {
          Notiflix.Notify.failure('Registration failed. Please try again.');
        }
      });
  };

  return (
    <div>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
