import constants from './../actions/constants';

export default(state={selectedItem: null}, action) => {
  switch(action.type) {
    case constants.SELECT_ITEM_TO_EDIT:
      return Object.assign({}, state, {itemToEdit: action.data} );
    case constants.SELECT_ITEM:
      return Object.assign({}, state, {selectedItem: action.data});
    case constants.UNSELECT_ITEM:  
      return Object.assign({}, state, {selectedItem: null});
  default:
    return state;
  }
}