import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { MAIN_PROXY_API } from './config/const';

// Strapi 5 backend: ask for the v4 response shape (data.attributes) the app expects.
// Only for Strapi requests, so the config API doesn't get an unknown header.
axios.interceptors.request.use((config) => {
  if (config.url && config.url.startsWith(MAIN_PROXY_API)) {
    config.headers['Strapi-Response-Format'] = 'v4';
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
