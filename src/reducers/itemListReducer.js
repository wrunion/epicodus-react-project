export default (state = [], action) => {
  const { type, data } = action;

  switch(type) {
    case "ADD_ITEM":
      return [data, ...state];
    case 'EDIT_ITEM':
      return state.map(e => e.id === data.id ? data : e);
    case 'DELETE_ITEM':
      return state.filter(e => e.id !== data.id);  
    default:
      return state;
  }
}