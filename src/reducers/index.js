import { combineReducers } from 'redux';
import itemListReducer from './itemListReducer';
import handleClickReducer from './handleClickReducer';

const rootReducer = combineReducers({
  itemList: itemListReducer,
  handleClick: handleClickReducer
})

export default rootReducer;