import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../redux/user/operation';

import styles from './RegisterForm.module.css';
import icons from '../../assets/icons/icons.svg';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('/signup', formData);

      if (response.data.success) {
        console.log('Registration successful');

        dispatch(fetchUserData());

        navigate('/main');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <form className={styles.registerForm} onSubmit={handleRegister}>
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
