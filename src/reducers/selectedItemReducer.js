export default (state={selectedItem: null, editing: null}, action) => {
  const { type, data } = action;

  switch(type) {
    case 'SELECT_ITEM':
      return { ...state,  selectedItem: data};
    case 'EDIT_ITEM':
      const newState = { ...state, editing: data};
      return { state: newState};     
    default:
      return state;  
  }
}