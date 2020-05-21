export default(state={selectedItem: null, editing: false}, action) => {
  const { type, data } = action;

  switch(type) {
    case 'SELECT_ITEM':
      return { ...state,  selectedItem: data};
    case 'EDIT_CLICK':
      return { ...state, editing: true};     
    default:
      return state;  
  }
}