import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';

import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'components/ToggleSwitch/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
//<BrowserRouter basename="/soyummy">
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>

  // </React.StrictMode>
);
