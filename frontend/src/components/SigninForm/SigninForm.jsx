import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../redux/user/operation';

import styles from './SigninForm.module.css';
import icons from '../../assets/icons/icons.svg';

export const SigninForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', formData);

      if (response.data.success) {
        console.log('Sign in successful');

        dispatch(fetchUserData());

        navigate('/main');
      } else {
        console.error('Sign in failed');
      }
    } catch (error) {
      console.error('Sign in failed', error);
    }
  };

  return (
    <div>
      <form className={styles.signinForm} onSubmit={handleSignIn}>
        <h2 className={styles.signinTitle}>Sign in</h2>
        <div className={styles.inputContainer}>
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
        <button className={styles.signinButton} type="submit">
          Sign in
        </button>
      </form>
      <Link to="/register" className={styles.link}>
        Registration
      </Link>
    </div>
  );
};
