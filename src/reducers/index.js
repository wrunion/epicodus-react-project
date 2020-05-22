import { combineReducers } from 'redux';

import itemReducer from './itemReducer';
import toggleFormReducer from './toggleFormReducer';
import selectedItemReducer from './selectedItemReducer';

const rootReducer = combineReducers({
  itemReducer: itemReducer,
  toggleFormReducer: toggleFormReducer,
  selectedItemReducer: selectedItemReducer
});

export default rootReducer;