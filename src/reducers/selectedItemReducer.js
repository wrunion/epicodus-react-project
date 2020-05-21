/* NOTE: this isn't exporting correctly for some reason */
export default (state={selectedItem: null}, action) => {
  const { type, data } = action;

  switch(type) {
    case 'SELECT_ITEM_CLICK':
      return { ...state,  selectedItem: data};  
    default:
      return state;  
  }
}