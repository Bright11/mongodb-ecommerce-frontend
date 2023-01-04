import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//our configuratiob start here
import store from './store';
import { Provider } from "react-redux"
import { persistGate } from "redux-persist/integration/react"
import persistStore from "redux-persist/es/persistStore"

//store persist in index.js

const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // setting uo provider
  <Provider store={store}>
    <React.StrictMode>
      <persistGate
        loading={<div>Loading...</div>}
        persistStore={persistedStore}
      >
        <App />
      </persistGate>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
