export default (state ={}, action) => {
  const { type, data } = action;

  switch(type) {
    case "ADD_ITEM":
      return [...state, data];
    case 'EDIT_ITEM':
      return state.map(e => e.id === data.id ? data : e);
    case 'DELETE_ITEM':
      return state.filter(e => e.id !== data.id);  
    default:
      return state;
  }
}


// export default (state = {}, action) => {
//   /* Destructure properties from action object */
//   const { name, description, available, price, id} = action;
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return {
//         itemList: [
//           {
//             name: name,
//             description: description,
//             available: available,
//             price: price,
//             id: id
//           }
//         ]
//       };
//     case 'DELETE_ITEM':  
//       return {
//         ...state,
//         itemList: state.itemList.filter(e => e.id !== id)
//       };


//     default: 
//       return state;  
//     }
//   };