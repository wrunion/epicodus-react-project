import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
    </Provider>,
  document.getElementById('root')
);