import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import icons from '../../assets/icons/icons.svg';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/userAPI/actions';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

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

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await dispatch(registerUser(formData));

      if (response.payload.isEmailVerified) {
        handleRegistrationSuccess();
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2 className={styles.registerTitle}>Registration</h2>
        {error && <p className={styles.error}>{error}</p>}
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
