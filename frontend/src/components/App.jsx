import { Route, Routes } from 'react-router-dom';
import { Main } from './Main/main';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
};
