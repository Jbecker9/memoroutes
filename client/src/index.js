import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import rootReducer from './reducers/index.js';
import { configureStore, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from 'redux-thunk';
import logger from "redux-logger";

// create reducer for user model
const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))

const store = configureStore({ 
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(composeEnhancers).concat(logger),
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
