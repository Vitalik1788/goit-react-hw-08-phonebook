import './index.css';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import {  store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
