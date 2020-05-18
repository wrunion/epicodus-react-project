const itemReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_ITEM':
      console.log('created item', action.item);
    break;
      default:
      return state  
  }
  return state;
}

export default itemReducer;