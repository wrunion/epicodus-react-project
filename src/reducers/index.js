import { combineReducers } from 'redux';
import itemListReducer from './itemListReducer';
import handleClickReducer from './handleClickReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  itemList: itemListReducer,
  handleClick: handleClickReducer,
  formReducer: formReducer
})

export default rootReducer;