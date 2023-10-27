import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { WelcomePage } from '../pages/WellcomPage/WellcomePage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { SigninPage } from '../pages/SigninPage/SigninPage';

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </div>
  );
};

export default App;
