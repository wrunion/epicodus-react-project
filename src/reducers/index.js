import { combineReducers } from 'redux';

import itemListReducer from './itemListReducer';
import toggleFormReducer from './toggleFormReducer';
import selectedItemReducer from ' ./selectedItemReducer';

const rootReducer = combineReducers({
  itemListReducer: itemListReducer,
  toggleFormReducer: toggleFormReducer,
  selectedItemReducer: selectedItemReducer
});

export default rootReducer;