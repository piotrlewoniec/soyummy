import { Route, Routes } from 'react-router-dom';
import { Main } from './Main/main';
import { WelcomePage } from '../pages/WellcomPage/WellcomePage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { SigninPage } from '../pages/SigninPage/SigninPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
