import constants from './../actions/constants';

export default (state = [], action) => {
  const { type, data } = action;

  switch(type) {
    case constants.ADD_ITEM:
      return [data, ...state];
    case constants.EDIT_ITEM:
      return state.map(e => e.id === data.id ? data : e);
    case constants.DELETE_ITEM:
      return state.filter(e => e.id !== data.id);  
    default:
      return state;
  }
}