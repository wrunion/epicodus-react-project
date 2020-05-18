import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

// export default (state ={}, action) => {
//   const { type, data } = action;

//   switch(type) {
//     case "ADD_ITEM":
//       return [...state, data];
//     case 'EDIT_ITEM':
//       return state.map(e => e.id === data.id ? data : e);
//     case 'DELETE_ITEM':
//       return state.filter(e => e.id !== data.id);  
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers({
  item: itemReducer
})

export default rootReducer;