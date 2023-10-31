import { Route, Routes } from 'react-router-dom';
import { Main } from './Main/main';
import { WelcomePage } from '../pages/WellcomPage/WellcomePage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { SigninPage } from '../pages/SigninPage/SigninPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { ShoppingListPage } from '../pages/ShoppingListPage/ShoppingListPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
