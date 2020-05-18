export default(state={}, action) => {
  const { type, data } = action;

  switch(type) {
    case 'CANCEL_CLICK': 
      return { ...state, formShowing: false };
    case 'SELECT_ITEM_CLICK':
      return { ...state,  selectedItem: data}; 
    case 'ENTER_EDIT_MODE': 
      return { ...state, editing: true };
    case 'TOGGLE_FORM':
      return { formShowing: !state.formShowing };  
    default:
      return state;  
  }
}