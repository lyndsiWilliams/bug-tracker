// Package imports
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Reducer
import { rootReducer } from './reducers';
// Component
import App from './App';
// Styling
import './index.css';
// Other
import reportWebVitals from './reportWebVitals';


const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
