export default(state={}, action) => {
  const { type, data } = action;

  switch(type) {
    case 'CANCEL_CLICK': 
      return state;
    case 'SELECT_ITEM_CLICK':
      return state; 
    case 'ENTER_EDIT_CLICK': 
      return state; 
    default:
      return state;  
  }
}