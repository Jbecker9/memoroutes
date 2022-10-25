import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import store from './reducers/store';
import { UserProvider } from './context/user';

// create reducer for user model


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Provider store={store} >
            <App />
        </Provider>
      </UserProvider>
    </BrowserRouter>
  //  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
