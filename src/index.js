import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import {store } from './redux/store';
import "slick-carousel/slick/slick.css"; 
import firebaseConfig from './firebase.config'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);


