export default(state={selectedItem: null}, action) => {
  switch(action.type) {
    case 'SELECT_ITEM_TO_EDIT':
      return Object.assign({}, state, {itemToEdit: action.data} );
    case 'SELECT_ITEM':
      return Object.assign({}, state, {selectedItem: action.data});
    case 'UNSELECT_ITEM':  
      return Object.assign({}, state, {selectedItem: null});
  default:
    return state;
  }
}