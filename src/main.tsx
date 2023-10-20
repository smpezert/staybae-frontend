import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import '../styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { FavouriteContextProvider } from './components/context/FavouritesContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FavouriteContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouriteContextProvider>
  </React.StrictMode>
);
