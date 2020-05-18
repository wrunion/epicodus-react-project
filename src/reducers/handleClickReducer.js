export default(state={}, action) => {
  const { type, data } = action;

  switch(type) {
    case 'CANCEL_CLICK': 
      return { ...state, editing: false };
    case 'SELECTED_ITEM_CLICK':
      return state; 
    case 'ENTER_EDIT_MODE': 
      return { ...state, editing: true };
    default:
      return state;  
  }
}